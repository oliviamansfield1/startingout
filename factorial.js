function factorial(x){
    var counter = 1
    for (i=1; i<=x; i=i+1) {
        counter = counter*i
    }
    return counter
}

function reverseString(x) {
    var bit = ""
    for (i=x.length-1 ;i>=0 ; i=i-1) {
        bit = bit + x[i]
    }
    return bit
}
