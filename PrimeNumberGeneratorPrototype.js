/*
  Write a program taht prints out a multiplication table of the first 10 prime number.

  The program must run from the command line and print one table to STDOUT

  The first row and column of the table should have the 10 primes,
  with each cell containing the product of the primes for the corresponding row and column.
*/
/*
  Consider complexcity. How fast does your code run? How does it scale?
  Consider cases where we want N primes.
  Do not use the Prime class from stdlib (write your own code)
  Write tests. Try to demonstrate TDD/BDD.
  If you're using external dependencies please specify those dependencies and how to install them.
  Please package your code. OR include running instructions.
  When you are done, put your code on GitHub or email us a zip/tarball.
*/

const math = require('mathjs')

//  1. generate N prime numbers
//slow works
function nPrimeNumbers(N=10){
  var possiblePrime = 2;
  var arrayOfPrime = [possiblePrime];
  //making N primes
  while(arrayOfPrime.length <N){
    possiblePrime+=1;

    //finding next prime
    var i =0;
    while(i<arrayOfPrime.length){
      if (possiblePrime%arrayOfPrime[i]==0){
        break;
      }
      else{
        if(!arrayOfPrime.includes(possiblePrime)){
          arrayOfPrime.push(possiblePrime);
        }
      }
      i++;
    }
  }
  return arrayOfPrime;
}

//  2. make a multiplication table
function emptyTable(N=10){
  return math.zeros(N,N);
}
// 2.1. lame table filler
function fillTable(arrayOfPrime,emptyTable){
  var iter = arrayOfPrime.length*arrayOfPrime.length;

  for(var i=0;i<arrayOfPrime.length;i++){
    for(var j=0;j<arrayOfPrime.length;j++){
      emptyTable.subset(math.index(i,j),arrayOfPrime[i]*arrayOfPrime[j]);

    }
  }
  return emptyTable;
}


//  3. print the table

//console.log(nPrimeNumbers());
//console.log(emptyTable());

// var temp=math.zeros(10,10);
// console.log(temp);
// temp.subset(math.index(0, 0),400);
// console.log(temp);

// var myTable = emptyTable();
// console.log(myTable);
// var myArrayOfPrime = nPrimeNumbers();
// console.log(myArrayOfPrime);

console.log(fillTable(nPrimeNumbers(),emptyTable()));
















//
