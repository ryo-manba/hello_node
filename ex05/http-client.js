if (process.argv.length != 3)
	return console.error("Usage: node http-client.js [url]");

const http = require("http");
try {
	http.get(process.argv[2], (res) => {
		let body = "";
		res.setEncoding("utf8");
		res.on("data", (chunk) => {
			body += chunk;
		});
		res.on("end", (res => {
			console.log(body);
		}))
	}).on("error", (err) => {
		console.error(err.message);
	});
} catch (err) {
	console.error(err.message);
}
