const person = {
    name: 'Ankur'
    , age: 40
    , hobbies: ['sports', 'cooking']
}

let favouriteActivities: string[];
favouriteActivities = ['skye'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
