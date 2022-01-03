// create an array of five random number between 1 and 10
let rands = [];
let count = 0;
const size = 5;

while (count < size) {
    rands.push(Math.round(Math.random() * 10));
    count++;
    console.log('The current size of the array is ' + count);
}

console.log(rands);