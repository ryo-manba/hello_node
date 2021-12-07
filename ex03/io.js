if (process.argv.length != 3)
	return console.log("Usage: node io.js [file path]");

const fs = require("fs")
try {
	const text = fs.readFileSync(process.argv[2], "utf8")
	let sum = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] == "\n")
			sum++;
	}
	console.log(sum);
} catch (err) {
	console.log(err.message);
}
