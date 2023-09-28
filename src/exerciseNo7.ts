// type mutualFunc = (class1: string[], class2: string[]) => string[];

// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

// const classSum = class1.concat(class2);

// const classDup: string[] = [];
// classSum.forEach((element) => {
//   if (!classDup.includes(element)) {
//     classDup.push(element);
//   }
// });

// console.log(classDup);

//? another solution
type mutualFunc = (arr1: string[], arr2: string[]) => string[];

const mutual: mutualFunc = (arr1, arr2) => {
  const result: string[] = [];

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
