
// const names: string[] = ['max', 'manuel'];
// const names1: Array<string> = ['max', 'manuel'];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is done')
//     }, 2000);
// })

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedobj = merge({ name: 'Ankur' }, { age: 40 });
mergedobj.name;

