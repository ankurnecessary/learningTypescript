
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


class DataStorage<T extends string | number | boolean> {
    private data: Array<T> = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

interface CourseGoal {
    title?: string;
    description?: string;
    completeUntil?: Date;
}

/* function createCourseGoal(
    title: string
    , description: string
    , date: Date
): CourseGoal {
    return {
        title,
        description,
        completeUntil: date
    }
} */

function createCourseGoal(
    title: string
    , description: string
    , date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const arr: Readonly<Array<string>> = ['Hello', 'World'];
// arr[0] = 'test';
// arr.push('Test');
// arr.pop();