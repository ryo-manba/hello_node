if (process.argv.length != 3) {
	const file_name = process.argv[1].replace(/^.*[\\\/]/, '');
	return console.error(`Usage: node ${file_name} [port]`);
}
var http = require('http')
var URL = require('url').URL

function get_pt(date) {
	return {
		hour: date.getUTCHours(),
		minute: date.getUTCMinutes(),
		second: date.getUTCSeconds()
	}
}

function get_ut(date) {
	return { unixtime: date.getTime() }
}
try {
	const server = http.createServer((req, res) => {
		res.on("error", (err) => {
			console.error(err.message);
		});
		const parsedUrl = new URL(`http://localhost:${parseInt(process.argv[2])}${req.url}`);
		const params = parsedUrl.searchParams;
		const time = params.get('iso');
		const date = new Date(time);
		let result;

		if (isNaN(date))
			return res.end("Invalid date\n");
		if (req.method != "GET")
			return res.end("Invalid HTTP method\n");
		if (parsedUrl.pathname == "/api/parsetime")
			result = get_pt(date);
		if (parsedUrl.pathname == "/api/unixtime")
			result = get_ut(date);
		if (result) {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(result) + "\n");
		} else {
			res.writeHead(404);
			res.end("404 Not Found\n");
		}
	}).on("error", (err) => {
		console.error(err.message);
	}).listen(parseInt(process.argv[2]));
} catch (err) {
	console.error(err.message);
};
