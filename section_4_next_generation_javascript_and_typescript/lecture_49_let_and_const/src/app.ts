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

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output)

// printOutput(add(5));

// const button = document.querySelector('button');
// button?.addEventListener('click', event => console.log(event));

// const hobbies: string[] = ['Sports', 'Cooking'];
// const activeHobbies: Array<string> = ['Hiking', ...hobbies];
// console.log(activeHobbies);

const person = {
    name: 'Ankur'
    , age: 30
};

const copiedPerson = { ...person };

const add = (...numbers: Array<number>) => numbers.reduce((prev: number, curr: number) => prev + curr, 0);

console.log(add(4, 3, 5));

