// ASSESSMENT 2: Coding Practical Questions with Jest

// const { ifStatement, exportDefaultSpecifier } = require("@babel/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]

// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.


describe("numbs", () => {
  const num1 = 15
  // Expected output: "15 is divisible by three"
  const num2 = 0
  // Expected output: "0 is divisible by three"
  const num3 = -7
  // Expected output: "-7 is not divisible by three"

  it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    expect(numbs(num1)).toEqual("15 is divisible by three")
    expect(numbs(num2)).toEqual("0 is divisible by three")
    expect(numbs(num3)).toEqual("-7 is not divisible by three")
    
  })  
})  
// FAIL  ./code-challenges.test.js
// numbs
//   ✕ takes a number as an argument and decides if the number is evenly divisble by three or not (3 ms)

// ● numbs › takes a number as an argument and decides if the number is evenly divisble by three or not


// b) Create the function that makes the test pass.
   const numbs = (number) => {
     if(number %3 ===0) {
       return `${number} is divisible by three`
     } else if(number %3 !==0){
       return `${number} is not divisible by three`
     }
   }
console.log(numbs);




// Psuedo Code
// declare functions for numbs
// i would use string interprolation with back ticks and curlybraces
// input is a number data type
// ouput will be a string
// string that includes a number


//Ran test with jest
//created a function and entered in num1,num2,num3
//came back as a error I need to go back and watch the lecture videos on functions and higher functions.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("nouns", () => {
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

it("takes in an array of words and returns an array with all the words capitalized", () => {
  expect(nouns(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
  expect(nouns(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  
})  
})  
 
//  FAIL  ./code-challenges.test.js
// numbs
//   ✕ takes a number as an argument and decides if the number is evenly divisble by three or not (2 ms)
// nouns
//   ✕ takes in an array of words and returns an array with all the words capitalized

// ● numbs › takes a number as an argument and decides if the number is evenly divisble by three or not




// b) Create the function that makes the test pass.
const nouns = (array) => {
 } if (i == 0 || nouns[i].charAt(0) == nouns[i].charAt(0).toUpperCase()) {
    arr[0] = arr[0].charAt(0).toUpperCase();
  }
  
console.log(nouns.toUpperCase);

// declare a function
// capitilize the letters in the array at the 0 index using indexOf
//use UpperCase to capitilize 
//


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
 

 describe(vowels,() => {

  const vowelTester1 = "learn"
  // Expected output: 1
  const vowelTester2 = "academy"
  // Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

   it( "takes in a string and logs the index of the first vowel", () => {         
     expect(vowels(vowelTester1)).toEqual(1)    
       expect(vowels(vowelTester2)).toEqual(0)
      expect(vowels(vowelTester3)).toEqual(2)
       })
    })


    // b) Create the function that makes the test pass.

    // FAIL  ./code-challenges.test.js
    // ● Test suite failed to run
  
    //   SyntaxError: /Users/learnacademy/Desktop/week-2-assessment-DavonKenn/code-challenges.test.js: Unexpected token, expected "," (149:42)
  
    //     147 |     // b) Create the function that makes the test pass.
    //     148 |
    //   > 149 | const vowels = (/[aeiou]/).split(seperator:"");
    //         |                                           ^
    //     150 | let count = 0
    //     151 |    
    //     152 | for (const cur of structuredClone.toLowerCase() {
  

//  Create a function that takes in a string and returns the index of the first vowel
// identify what method i need to use to find the first vowel
// find count of vowels
// return number of vowels

function countVowel(str) { 

  const count = str.match(/[aeiou]/gi).length;

  
  return count;
}

const string = prompt("learn");

const result = countVowel(string);

console.log(result);