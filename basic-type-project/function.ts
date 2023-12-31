function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number) {
    console.log(`Result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (num: number, num2: number) => void) {
    const result = n1 + n2;
    cb(result, n1);
}

addAndHandle(10, 20, (result) => console.log(result))
