if (process.argv.length != 3)
	return console.log("Usage: node asyncio.js [file path]");

const fs = require("fs");
fs.readFile(process.argv[2],{encoding: "utf8"}, (err, text) => {
	if (text) {
		const lines = text.toString().split("\n");
		console.log(lines.length - 1);
	} else {
		console.log(err.message);
	}
});
