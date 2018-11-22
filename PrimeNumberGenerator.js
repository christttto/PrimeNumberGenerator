/*
  Write a program taht prints out a multiplication table of the first 10 prime number.

  The program must run from the command line and print one table to STDOUT

  The first row and column of the table should have the 10 primes,
  with each cell containing the product of the primes for the corresponding row and column.

  Consider complexcity. How fast does your code run? How does it scale?
  Consider cases where we want N primes.
  Do not use the Prime class from stdlib (write your own code)
  Write tests. Try to demonstrate TDD/BDD.
  If you're using external dependencies please specify those dependencies and how to install them.
  Please package your code. OR include running instructions.
  When you are done, put your code on GitHub or email us a zip/tarball.
*/

/*
The task has been compartmentalized to four parts:
  1. generating prime nPrimeNumbers
  2. making a matrix
  3. filling up the matrix, printing out

*/

//importing mathjs 'http://mathjs.org/download.html'
const math = require('mathjs')

//  1. generate N prime numbers
//  1.1. basic algorithm
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

//  1.2. optimized
//https://en.wikibooks.org/wiki/Some_Basic_and_Inefficient_Prime_Number_Generating_Algorithms
function nPrimeNumbers(N=10){
  var possiblePrime = 2;//pp
  var arrayOfPrime = [possiblePrime];//ps
  possiblePrime = possiblePrime+1;
  arrayOfPrime.push(possiblePrime);
  while(arrayOfPrime.length <N){
    possiblePrime+=2;
    test = true;
    sqrtPossiblePrime = math.sqrt(possiblePrime);
    var i;
    for(i=0;i<arrayOfPrime.length;i++){
      if(arrayOfPrime[i] > sqrtPossiblePrime){
        break;
      }
      if(possiblePrime%arrayOfPrime[i]==0){
        test=false;
        break;
      }
    }
    if(test){
      arrayOfPrime.push(possiblePrime);
    }
  }
  return arrayOfPrime;
}

//  1.3. test
function testPrimeGenerator(nPrimeNumbers){
  var tenPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  var myPrime = nPrimeNumbers;
  return myPrime != tenPrimes;
}
//console.log('primeGenertor returns: '+testPrimeGenerator(nPrimeNumbers));



//  2. make a multiplication table
function emptyTable(N=10){
  return math.zeros(N,N);
}

// 2.1. basic table filler
function fillTable(arrayOfPrime,emptyTable){
  var iter = arrayOfPrime.length*arrayOfPrime.length;

  for(var i=0;i<arrayOfPrime.length;i++){
    for(var j=0;j<arrayOfPrime.length;j++){
      emptyTable.subset(math.index(i,j),arrayOfPrime[i]*arrayOfPrime[j]);
    }
  }
  return emptyTable;
}

// 2.2. optimized table fill-print, start row stdout, no return
function primeNumberTable(N=10){
  var myTable = emptyTable(N);
  var myPrime = nPrimeNumbers(N);
  var i;
  var j;
  process.stdout.write('  ');
  for(i=0;i<myPrime.length;i++){
    process.stdout.write(myPrime[i]+' ');
  }
  console.log();
  for(i=0;i<myPrime.length;i++){
    process.stdout.write(myPrime[i]+' ');
    for(j=0;j<myPrime.length;j++){
      if(myTable.subset(math.index(j,i)) != 0){
        myTable.subset(math.index(i,j),myTable.subset(math.index(j,i)));
        process.stdout.write(myTable.subset(math.index(i,j))+' ');
      }
      else{
        myTable.subset(math.index(i,j),myPrime[i]*myPrime[j]);
        process.stdout.write(myTable.subset(math.index(i,j))+' ');
      }
    }
    console.log();
  }
  //return myTable;
}

//  3. print the table

primeNumberTable();














//
