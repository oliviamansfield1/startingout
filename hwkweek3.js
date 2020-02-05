function isDivisibleBy4(x) {
  if (x%4==0) {
    return true
  }
  else {
    return false
  }
}

function isDivisibleBy6(x) {
  if (x%6==0) {
    return true
  }
  else {
    return false
  }
}

function isDivisibleBy4and6(x) {
  if (x%4==0 && x%6==0) {
    return true
  }
  else {
    return false
  }
}

for (i=1; i<=100; i=i+1) {
  if (isDivisibleBy4and6(i)) {
  console.log("Fizzbuzz")
}

else if (isDivisibleBy4(i)) {
  console.log("Fizz")
}
else if (isDivisibleBy6(i)) {
  console.log("buzz")
}
else {
  console.log(i)
}
}
