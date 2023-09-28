"use strict";
const fizzBuzz = (a) => {
    if (a < 0)
        return;
    for (let i = 0; i < a; i++) {
        console.log(fizzBuzzGenerator(i));
    }
};
const fizzBuzzGenerator = (n) => {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    else if (n % 3 === 0) {
        return "Fizz";
    }
    else if (n % 5 === 0) {
        return "Buzz";
    }
    else {
        return `${n}`;
    }
};
