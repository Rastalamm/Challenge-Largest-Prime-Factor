exports.largestPrimeFactor = largestPrimeFactor;
function largestPrimeFactor(n){
  var primeNumber = 1;
  // do your work here
var start = Math.floor(n/2);
while ( n != 1 ) {
    if(n % start === 0){
       primeNumber = start;
       n = n / start;
       //return start;
    }else{
       start--;
    }

}
//while ends
return primeNumber;
};


//Counting up

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

//recursion
//not working properly
function findPF(n, cntr){

    if(cntr === undefined){
        cntr = 2;
    }

    if(n % cntr === 0){
        n = n/cntr;

        if(n === 1){
            return n;
        }else{
            cntr++;
            findPF(n, cntr);
        }

    }else{
        cntr++;
         findPF(n, cntr);
    }
    return n;

}


findPF(13195);