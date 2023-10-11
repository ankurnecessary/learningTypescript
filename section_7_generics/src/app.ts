
const names: string[] = ['max', 'manuel'];
const names1: Array<string> = ['max', 'manuel'];

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done')
    }, 2000);
})

