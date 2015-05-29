exports.largestPrimeFactor = largestPrimeFactor;
function largestPrimeFactor(n){
  var primeNumber = 1;
  // do your work here
var start = 2;
while ( n != 1 ) {
    if(n % start === 0){
       primeNumber = start;
       n = n / start;
    }else{
       start++
    }

}
//while ends
return primeNumber;
};
