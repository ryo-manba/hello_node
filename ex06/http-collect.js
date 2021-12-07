if (process.argv.length != 3)
	return console.error("Usage: node http-client.js [url]");

const http = require("http");
const bl = require("bl");
try {
	http.get(process.argv[2], (res) =>{
		return res.pipe(bl((err, data) => {
			if (err) {
				return console.error(err);
			}
			data = data.toString();
			console.log(data.length);
			return console.log(data);
		}));
	}).on("error", (err) => {
		console.error(err.message);
	});
} catch (err) {
	console.error(err.message);
}
