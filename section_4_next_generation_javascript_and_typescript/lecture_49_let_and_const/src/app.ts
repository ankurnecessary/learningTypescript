const username = 'Ankur';
// username = 'Deepika';

let age = 30;
age = 40;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// console.log(result);

if (age > 20) {
    var isOld = true;
}

// console.log(isOld); // It is showing an error in TS but it will be fine in JS.


// if (age > 20) {
//     let isOlder = true;
// }

// console.log(isOlder);

const add = (a: number, b: number) => a + b;

// console.log(add(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output)

printOutput(add(5, 2));

const button = document.querySelector('button');
button?.addEventListener('click', event => console.log(event));