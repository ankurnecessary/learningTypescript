function add(n1: number, n2: number) {
    return n1 + n2;
}

function printNum(n1: number) {
    console.log(n1);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;

