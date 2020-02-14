function factorial(x) {
  var counter = 1
  for (i=1; i<=x; i=i+1) {
    counter = counter*i
  }
  return counter
}


function triangle(x) {
  var bit = 0
  for (i=1; i<=x; i=i+1) {
    bit = bit+i
  }
  return bit
}

function reverseString(x) {
  var bit = ""
  for (i=x.length-1 ;i>=0; i=i-1) {
    bit = bit + x[i]
  }
  return bit
}

function endRev(x,y) {
  var bit = ""
  for (i=x.length-1; i>=x.length-y; i=i-1) {
    bit = bit + x[i]
  }

  return bit
}

function timeDiff(x,y) {
  return x-y
%}
