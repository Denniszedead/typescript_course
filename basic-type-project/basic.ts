function add(n1: number, n2: number, showResult: boolean, prefix: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(prefix + result)
    }
    return result;
}

let number1 = 1;
const number2 = 2.8;
const printResult = true;
const prefix = "Result is: "

const result = add(number1, number2, printResult, prefix);
