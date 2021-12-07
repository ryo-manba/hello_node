if (process.argv.length != 5) {
	const file_name = process.argv[1].replace(/^.*[\\\/]/, '');
	return console.error(`Usage: node ${file_name} [url] [url] [url]`);
}

const http = require('http');

function get_data(url) {
	return new Promise((resolve, reject) => {
		let body = "";
		try {
			http.get(url, (res) => {
				res.setEncoding("utf8");
				res.on("data", (chunk) => {
					body = chunk;
				});
				res.on("end", () => {
					resolve(body);
				});
				res.on("error", (err) => {
					reject(err);
				});
			}).on("error", (err) => {
				reject(err);
			});
		} catch (error) {
			reject(err);
		}
	});
}

let data = [];
(async () => {
	for (let i = 2; i < 5; i++) {
		data.push(get_data(process.argv[i]));
	}
	Promise.all(data).then((texts) => {
		for (let i = 0; i < texts.length; i++) {
			console.log(texts[i]);
		}
	}).catch((err) => {
		console.error(err.message);
	});
})();
