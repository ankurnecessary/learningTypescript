const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Ankur'
    , age: 40
    , hobbies: ['sports', 'cooking']
    , role: [2, 'student']
}

let favouriteActivities: string[];
favouriteActivities = ['skye'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
