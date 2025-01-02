const sumAll = function(num1, num2) {
    if (!Number.isSafeInteger(num1) || !Number.isSafeInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    let range
    let final = 0
    if (num1 > num2) {
        range = num1 - num2
        min = num2
    } else {
        range = num2 - num1
        min = num1
    }
    for (i=0; i<=range; i++) {
        final += i + min
    }
    return final

};

// Do not edit below this line
module.exports = sumAll;
