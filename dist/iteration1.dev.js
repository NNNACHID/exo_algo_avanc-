"use strict";

var readline = require("readline-sync");
/*
// 1 - Fatorielle



function fact(nbr) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (nbr === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return nbr * fact(nbr-1);
}
console.log(fact(4));

// 2 - Fibonacci


function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const nTerms = readline.question("Choose an integer ");

console.log(fibonacci(nTerms));
*/
// 3 - Syracuse


function syracuse(n) {
  while (n >= 1) {
    if (n % 2 == 0) {
      return n / 2;
    } else {
      return n * 3 + 1;
    }
  }
}

console.log(syracuse(15));