"use strict";
//? Write a function isMember(mem, arr)
//? isMember(mem, arr) returns a boolean indicating whether mem is a member of arr
//? Do not use Array helper methods - use a simple for loop
//? isMember(5, [1, 3, 7, 12]) // false
//? isMember('john', ['jane', 'jim', 'john']) // true
const checkIsMember = (mem, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === mem) {
            return true;
        }
    }
    return false;
};
console.log(checkIsMember(5, [1, 3, 7, 12]));
console.log(checkIsMember("john", ["jane", "jim", "john"]));
