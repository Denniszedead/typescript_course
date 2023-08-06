var userInput;
var userName;
userInput = 5;
userInput = '5';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(generateError('An error occurred!', 500));
