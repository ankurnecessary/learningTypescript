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
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
var person = {
    name: 'Ankur',
    age: 40,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('Is admin ->' + Role.ADMIN);
}
var favouriteActivities;
favouriteActivities = ['skye'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
