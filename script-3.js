let arr = [4, 10, 888, 99, 100];

// let toString = arr.join(' ')

// let toNumber = Number(toString)


// console.log(Math.min(4, 10, 888, 99, 100));
// console.log(Math.max(4, 10, 888, 99, 100));


console.log(arr.sort((a, b) => a - b).slice(-1));
console.log(arr.sort((a, b) => b - a).slice(-1));
