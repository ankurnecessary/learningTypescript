type combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-text';

function combine(input1: combinable, input2: combinable, aLiteral: conversionDescriptor) {
    let result;
    if (typeof (input1) === 'number' && typeof (input2) === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-text');
console.log(combinedAges);

const combinedNames = combine('Ankur', 'Gupta', 'as-number');
console.log(combinedNames);
