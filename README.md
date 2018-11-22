# PrimeNumberGenerator
The purpose of this js file is to print out a multiplication table of the first 10 prime numbers.
PrimeNumberGenerator.js file consists of three big parts:
  1. Generating prime numbers
  2. Creating object to hold multiplication values
  3. Filling out multiplication and printing the table
Each part was first implemented with basic idea, than re-factored for better performance. The simple versions of each tasks are commented out above of the optimized code as reference.

# Generating prime numbers
First, a simple version with nested forloop was implemented for testing purpose and functionality check. With the base case initiated with the first prime number 2, the forloop iterates all the number less than the tested value to check if the remainder equals zero. This process repeats until 10 prime numbers are generated.
To expediate this algorithm, some adjustment was made.
Because even numbers can be divided by zero, all the even numbers excluding 2 can be skipped, expediating the process by 100%. 
Next, the list of potential prime number decreased from further modification. The potential prime can be factored by those primes less than or equal to the square root of the potential prime, since primes larger than the square root of the potential prime will be complementary factors of at least one prime less than the square root of the potential prime. 
For modification of the prime generating algorithm, a wiki book was referenced, which is linked below.
https://en.wikibooks.org/wiki/Some_Basic_and_Inefficient_Prime_Number_Generating_Algorithms
# Creating object
An object was needed, that could easily be turned into a table, with good accessibility to different coordination. The matrix API of Mathjs allowed use of matrix to hold calculation values and access inverse values in the multiplication table.
# Filling out multiplication and printing the table
Because filling in the values and printing the table both required iteration over the table. The two processes were merged to expediate the process. In the inner forloop, an if statement was implemented to minimize redundant calculation. Though at the smaller number, simple arithmatics can be repeated, when the number grows it is no longer the case. Especially with prime numbers, the size of prime number increases almost exponentially, reaching the big number fast. With Minimal amount of repeated calculation, the process can be scalable.
# Complexity
Each part of the code has different complexity, needed to be added at the end.
For generating prime number, the complexity comes out to be N*(sqrt(N)), because the inner loop of the algorithm does not run for N, but square root of it. 
Filling out and printing the table takes slightly longer with N^2. However, the process has been cut down to half by merging two processes of printing the table and filling up into one process.
# N primes
The prime number generator by default generates array of 10 prime numbers, but when argument is provided, the function can also return N number of primes. With scalabilty in mind, the whole process has been modded to be least influenced by the increase in the size  of N.
# External dependency
To create matrix that holds the multiplication table, mathjs has been imported.
On terminal, running "npm install mathjs" can initiate install of mathjs.
# Running instruction
First, mathjs must be installed.
The code runs on node with mathjs installed. On Terminal, "node PrimeNumberGenerator.js" can be ran to print the multiplication table.
