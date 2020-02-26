function bubbleSort(A) {
while (true) {
  var switchCount = 0
  for (i=0; i<A.length-1; i=i+1) {
    if (A[i+1]<A[i]) {
      var a=A[i]
      A[i]=A[i+1]
      A[i+1]= a
      switchCount = switchCount+1
    }
  }
  console.log(switchCount)
  if (switchCount==0) {
    break
  }
}
return A
}
