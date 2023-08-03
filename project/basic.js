function add(n1, n2, showResult, prefix) {
    var result = n1 + n2;
    if (showResult) {
        console.log(prefix + result);
    }
    return result;
}
var number1;
number1 = 1;
var number2 = 2.8;
var printResult = true;
var prefix = "Result is: ";
var result = add(number1, number2, printResult, prefix);
