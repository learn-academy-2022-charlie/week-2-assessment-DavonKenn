// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Bravo 2022"
//console.log(cohort.split(""))

// a) Your answer: "B r a v o  2 0 2 2 "
// b) Verify and explain: When you console log cohort.split with parenthesis it takes the values in the string puts them individually in a string
//B', 'r', 'a', 'v', 'o', ' ', '2', '0', '2', '2'

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:It will log Hello Learn Students
// b) Verify and explain: It returned undefined because it doesnt have a return.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//console.log(multBy2)

// a) Your answer:[8,10,12,14,16]
// b) Verify and explain:I got [8,10,12,14,16], it logged this because the function was told to multiply by two and with the method map it iterated throught the whole array.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
//  console.log(onlyOdds)

// a) Your answer: The output will be [5.5,12,13,14,15]
// b) Verify and explain:[ 11, 13, 15 ] What I did wrong was I didnt aying attention to the bang operator nor the modelo sign.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer:JavaScript
// b) Verify and explain: The ouput was Javascript because it waas looking for the 0 index in the key languages.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
  // console.log(learnStudent)

// a) Your answer: this.student=George
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 }. I was right var learnStudent = new Learn("George") was creating a new class(an object)
