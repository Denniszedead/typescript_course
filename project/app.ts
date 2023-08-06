let userInput: unknown;
let userName: string;

userInput = 5;
userInput = '5';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number) {
    throw {message: message, errorCode: code};
}

console.log(generateError('An error occurred!', 500));
