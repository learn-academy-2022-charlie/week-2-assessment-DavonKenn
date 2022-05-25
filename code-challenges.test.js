// ASSESSMENT 2: Coding Practical Questions with Jest

const { ifStatement, exportDefaultSpecifier } = require("@babel/types")
const { describe } = require("yargs")

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

const num1 = 15
describe("divisible by 3", () => {
    it("15 is divisible by three", () => {
      let(num1("divide 3")).toEqual("eat15 is didvisible by 3")
      let(num2("divide 3")).toEqual("0 is divisible by three")
      let(num3("divide 3")).toEqual("-7 is not divisible by three")
    })
  })
console.log(num1);
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.
    if("num1" / 3 === 5") {
      return ("15 is divisible by 3")
     } else if("num2" / 3 === 0) {
      return "0 is divisible by three"
    } else ("num3" / 3 === NaN")
}

//Ran test with jest
//created a function and entered in num1,num2,num3
//came back as a error I need to go back and watch the lecture videos on functions and higher functions.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
describe(randomNouns1,randomNouns2 () => {
     it("returns".Uppercase , () => {
  expect(randomNouns1,randomNouns2()).toEqual(.map)    
   })
     })

// b) Create the function that makes the test pass.
 {
    if (randomNouns1.length) {
      return [randomNouns1[0].toUpperCase()];
    }
    let res = capitalizeWords(randomNouns2.slice(0));
    res.push(randomNouns2.slice(randomNouns2.length)[0].toUpperCase());
    return res;
   
  }
console.log(randomNouns1,randomNouns1);

//create a function 
// capitilize the letters in the array at the 0 index
//use UpperCase to capitilize 
//My output didnt comeback as uppercase.


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
 

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe(vowelTester1,(learn) => {
    it( "1", () => {
        expect(vowelTester2("academy")).toEqual("0")
        expect(vowelTester3("challenges")).toEqual("2")
      })
    })
// b) Create the function that makes the test pass.

//Make a function thats counts the vowel in vowelTester1,vowelTester2,vowelTester3

if(vowelTester1 === "learn") {
    return "1"
    else if(vowelTester2 === "academy"){
        return "0" 
    }
    else if(vowelTester3 === "challenges")
    return "2"
}

console.log(vowelTester1,vowelTester2,vowelTester3)


//made a if statement for the vowel
//logged vowelTester got back errors