# PrimeNumberGenerator
The purpose of this js file is to print out a multiplication table of the first 10 prime numbers.
PrimeNumberGenerator.js file consists of three big parts:
  1. Generating prime numbers
  2. Creating object to hold multiplication values
  3. Filling out multiplication and printing the table
Each part was first implemented with basic idea, than re-factored for better performance. The simple versions of each tasks are commented out above of the optimized code as reference.
# Complexity
Each part of the code has different complexity, needed to be added at the end.
For generating prime number, the complexity comes out to be N*(sqrt(N)), because the inner loop of the algorithm does not run for N, but square root of it. 
Filling out and printing the table takes slightly longer with N^2. However, the process has been cut down to half by merging two processes of printing the table and filling up into one process.
# N primes
The prime number generator by default generates array of 10 prime numbers, but when argument is provided, the function can also return N number of primes.
# External dependency
To create matrix that holds the multiplication table, mathjs has been imported. 
# Running instruction
The code runs on node with mathjs installed. On Terminal, "node PrimeNumberGenerator.js" can be ran to print the multiplication table.
