function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log("".concat(phrase, " ").concat(n1 + n2));
    }
    else {
        return "".concat(phrase, " ").concat(n1 + n2);
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is:';
var result = add(number1, number2, printResult, resultPhrase);
