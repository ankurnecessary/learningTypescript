function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResults(n1: number) {
    console.log(n1);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
    return 'test';
});


printResults(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
