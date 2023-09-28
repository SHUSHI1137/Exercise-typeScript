"use strict";
const gcd = (a, b) => {
    for (; b !== 0;) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};
console.log(gcd(10, 15)); // 5
console.log(gcd(18, 12)); // 6
console.log(gcd(3, 2)); // 1
