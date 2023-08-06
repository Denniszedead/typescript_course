enum Combinations {
    AS_NUMBER, AS_TEXT
}

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: Combinations) {
    let result;
    if (typeof input1 === "number" && typeof input2 === 'number' || resultConversion === Combinations.AS_NUMBER) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    /*if (resultConversion == Combinations.AS_NUMBER) {
        return +result;
    } else {
        return result.toString();
    }*/
}

const combinedAges = combine(30, 26, Combinations.AS_NUMBER);
const combinedNames = combine('Max', 'Anna', Combinations.AS_TEXT);
const combineAgesString = combine(30, 26, Combinations.AS_TEXT);

console.log(combinedAges)
console.log(combinedNames)
console.log(combineAgesString)
