
// const names: string[] = ['max', 'manuel'];
// const names1: Array<string> = ['max', 'manuel'];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is done')
//     }, 2000);
// })

function merge<T extends {}, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedobj = merge({ name: 'Ankur' }, { age: 40 });
mergedobj.name;

type lengthy = { length: number };

function countAndDescribe<T extends lengthy>(element: T) {
    let description = element.length;
    return [element, description];
}

countAndDescribe([10]);
countAndDescribe('');

function getValueOfKey<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

getValueOfKey({ age: 10 }, 'age');



