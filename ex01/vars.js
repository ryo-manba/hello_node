const	str = "42",
		num = 42,
		obj = Object(42),
		dic = ({"42":"tokyo"}),
		boo = true,
		und = void 42;

console.log(`${str} is a ${typeof str}.`)
console.log(`${num} is a ${typeof num}.`)
console.log(`${obj} is an ${typeof obj}.`)
console.log(`${dic} is an ${typeof dic}.`)
console.log(`${boo} is a ${typeof boo}.`)
console.log(`${und} is an ${typeof und}.`)
