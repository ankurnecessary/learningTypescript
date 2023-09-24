// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Ankur'
//     , age: 40
//     , hobbies: ['sports', 'cooking']
//     , role: [2, 'student']
// }

enum Role { ADMIN = 'Admin', READ_ONLY = 0, AUTHOR = 'Author' }

const person = {
    name: 'Ankur'
    , age: 40
    , hobbies: ['sports', 'cooking']
    , role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
    console.log('Is admin ->' + Role.ADMIN);
}

let favouriteActivities: string[];
favouriteActivities = ['skye'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
