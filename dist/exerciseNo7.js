"use strict";
// type mutualFunc = (class1: string[], class2: string[]) => string[];
const mutual = (arr1, arr2) => {
    const result = [];
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        if (arr2.includes(element)) {
            result.push(element);
        }
    }
    return result;
};
const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];
