//for (i=1; i<=100; i=i+1) {
// if (i%2==0) {
//console.log(i)
//}
//}
function isDivisibleBy5(x) {
  if (x%5==0) {
    return true
  }
  else {
    return false
  }
}

function isDivisibleBy5and3(x) {
  if (x%5==0 && x%3==0) {
    return true
  }
  else {
    return false
  }
}

function isDivisibleBy3(x) {
  if (x%3==0) {
    return true
  }
  else {
    return false
  }
}

for (i=1; i<=100; i=i+1) {
  if (isDivisibleBy5and3(i)) {
  console.log("Fizzbuzz")
}
else if isDivisibleBy3(i) {
  console.log("Fizz")
}
else if isDivisibleBy5(i) {
  console.log("Buzz")
}
else {
  console.log(i)
}
}



function square(y) {
 return y*y
}

function add(x, y) {
  return x+y
}
console.log(isDivisibleBy3(16))
console.log(add(2, 2))
console.log(square(2))
