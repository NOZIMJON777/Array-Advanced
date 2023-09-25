let str = '5645';

let sum = 0;


for (let i = 0; i < str.length; i++) {
    sum += +str[i]
}
console.log(sum);


// console.log(str.split('').reduce((initial, total) => initial + +total, 0));