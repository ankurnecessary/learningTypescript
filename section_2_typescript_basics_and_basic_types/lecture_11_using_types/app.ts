function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResults(n1: number) {
    console.log(n1);
}

printResults(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;

