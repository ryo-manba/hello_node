if (process.argv.length != 3) {
	const file_name = process.argv[1].replace(/^.*[\\\/]/, '');
	return console.error(`Usage: node ${file_name} [port]`);
}
const net = require("net");
require('date-utils');

try {
	const server = net.createServer(socket => {
		socket.on("data", (data) => {
			const dt = new Date();
			const formatted = dt.toFormat("YYYY-MM-DD HH24:MI");
			socket.end(formatted + "\n");
		});
		socket.on("error", (err) => {
			return console.error(err.message);
		});
	});
	server.on("error", err => {
		return console.log(err.message);
	}).listen(parseInt(process.argv[2]));
} catch (err) {
	console.error(err.message);
};
