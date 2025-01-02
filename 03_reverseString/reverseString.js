const reverseString = function(input) {
    let length = input.length;
    let output = '';
    for (i=0; i<length; i++) {
        output += input[length - (i + 1)]
    };
    return output;
};

// Do not edit below this line
module.exports = reverseString;
