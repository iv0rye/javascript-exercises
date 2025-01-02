const removeFromArray = function(array, ...number) {
    let newArray = [];
    let removedNum = [];
    for (const num of number) {
        removedNum.push(num)
    }
    for (i=0; i<=(array.length - 1); i++) {
        let status = true;
        for (x=0; x<=(removedNum.length - 1); x++) {
            if (array[i] == number[x] && typeof array[i] == typeof number[x]) {
                status = false;
            };
        }
        if (status != false) {
            newArray.push(array[i]);
        }
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
