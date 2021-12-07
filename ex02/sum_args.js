if (process.argv.length < 3)
	return console.log("Usage: node sum_args.js [numbers]")

let sum = 0
for (var i = 2;i < process.argv.length; i++) {
	sum += parseInt(process.argv[i]);
	if (sum != sum)
		return console.log("Invalid arguments");
}
console.log(sum)
