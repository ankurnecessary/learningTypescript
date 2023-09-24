var person = {
    name: 'Ankur',
    age: 40,
    hobbies: ['sports', 'cooking']
};
var favouriteActivities;
favouriteActivities = ['skye'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
