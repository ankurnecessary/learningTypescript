function combine(input1, input2, aLiteral) {
    var result;
    if (typeof (input1) === 'number' && typeof (input2) === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-text');
console.log(combinedAges);
var combinedNames = combine('Ankur', 'Gupta', 'as-number');
console.log(combinedNames);
