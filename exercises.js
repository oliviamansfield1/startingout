// Create a program that prints "Hello, World"
console.log("Hello, world")

// Create a dictionary that maps letters to their scrabble scores
var scores = {A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10}
console.log("A" in scores)
console.log(scores["A"])
console.log(scores["a".toUpperCase()])

// Create a function that takes a word and returns its scrabble score
function scrabbleScore(word) {
  var total_score = 0
  var breakdown = word.split("")
  for (i=0; i<=breakdown.length-1; i=i+1) {
    var score = scores[breakdown[i].toUpperCase()]
    total_score = total_score + score
  }
  return total_score
}

console.log(scrabbleScore("Xenophobia"))

// Create a function that converts a string from a number "26" to roman numerals "XXVI"
// You can assume the number is strictly less than 50, bear in mind that "C" is 50
//
// HINTS:
// At first ignore that 4 is "IV" (use IIII) and 40 "XC" (use XXXX) etc.
// Then use the string "replace" method to replace "IIII" with "IV" and etc.
// var cute1 = "Ollie is cute"
// var cute2 = cute1.replace("Ollie", "Eve") (cute2 becomes "Eve is cute")
// NOTE:

// Integer division:
//      Math.floor(45/10) (returns 4) - divides and rounds down - low low low low
//      45 % 10           (returns 5) - gives the remainder NOT DIVIDE!!!!
// Repeating a string
//      "X".repeat(5) (return "XXXXX")

function romanNumerals(y) {
  var numberofXs = Math.floor(y/10)
  var remainder = y%10
  var numberofVs = Math.floor(remainder/5)
  var numberofIs = remainder%5

  var fergusNumerals = "X".repeat(numberofXs)+"V".repeat(numberofVs)+"I".repeat(numberofIs)
  var romanNumerals = fergusNumerals.replace("IIII", "IV").replace("VIV","IX").replace("XXXX","XC")
  return romanNumerals
}
for (i=0; i<=49; i=i+1) {
console.log(romanNumerals(i)) }

console.log(romanNumerals(49))

// Use your function to create a list of all the roman numerals from 1 to  49


// Create a function that converts a string from roman numerals "XXIV" to a number "24"
// Apply the function to every element of your list
//
// HINTS: Create an object with the values of each numeral: i.e. {X: 10, ...}
// Replace "IV", "IX", with "IIII, "VIIII", etc.
// loop through your string backwards, adding together the value of each character


// Create a function that checks if a number is prime (a number is prime if it has no divisors, except itself and 1)
//
// HINTS: remainder: 45 % 10 (returns 5) - what's the remainder if a number divides another number?

// Create a function that returns the nth prime number
//
// HINTS: use the result of the previous exercise: check all the numbers

// The Collatz Conjecture or 3x+1 problem can be summarized as follows:
// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.
// Given a number n, return the number of steps required to reach 1.
// Starting with n = 12, the steps would be as follows:
//
// 0.    12
// 1.    6
// 2.    3
// 3.    10
// 4.    5
// 5.    16
// 6.    8
// 7.    4
// 8.    2
// 9.    1

// Resulting in 9 steps. So for input n = 12, the return value would be 9.


// Given two lists, create a function that checks if the first is contained in the second.


// Create a function that determines if a sentence is a palindrome (a palindrome is a sentence that is the same backwards and forwards)
// Test on "a man, a plan a canal, panama"
// Your function should ignore commas, and spaces: use the following
// sentence.replace(/ /g, "").replace(/,/g,"")


// Create a function that determines if a sentence is a pangram (a pangram contains every letter at least once):
// Test on "the quick brown fox jumps over the lazy dog"
//
// HINTS:
// get rid of the spaces and commas.
// sort the result (str.split("").sort().join("") sorts a string in alphabetical order)
// get rid of duplicates (use this function)
//
function getRidOfDuplicates(str) {
    result = []
    for (letter of str) {
        if (!(result.includes(letter))) {
            result.push(letter)
        }
    }
    return result.join("")
  }
// create an alphabet string ("abc...").
// compare the result to the alphabet string

// Given a phrase, count the occurrences of each word in that phrase, and displays the words with their counts
// For example: "Ollie and Eve are cats, cats are great"
// should print
// Ollie: 1
// and: 1
// Eve: 1
// are: 2
// cats: 2
// great: 1
//
// HINTS:
// string methods: join and split
// "hello liv".split(" ") (returns ["hello", "liv"]
// what would be the result of "Ollie, eve".split(", ") ?
// ["hello", "liv"].join(", ") (returns "hello liv")
// what would be the result of ["hello", "liv"].join(" cute ")
//
// Split the sentence and loop through the result, counting how many times each word occurs (make an object)

// Create a function that checks if two words are anagrams

// Create a function that takes a phrase and returns its acronym
