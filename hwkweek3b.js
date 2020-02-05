function isEven(x) {
  if (x%2==0) {
    return true
  }
  else {
    return false
  }
}

for (i=1; i<=100; i=i+1) {
if (isEven(i)) {
  console.log(i)
}
}
