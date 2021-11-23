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

// 3 - Syracuse

const index = readline.question("Choose an integer: ");

function syracuse(n, i) {

  if (i == 0) {

    return n;

  } else if (syracuse(n, i - 1) % 2 === 0) {

    //console.log("iiii", n, i);
    return syracuse(n, i - 1) / 2;

  } else {

    //console.log("aaaa", n, i);
    return syracuse(n, i - 1) * 3 + 1;

  }
}

console.log(syracuse(15, index));



// - 4 PGCD

const first = readline.question("Choose an integer: ");
const second = readline.question("Choose another integer: ");

function pgcd (a, b) {

    if (b) {

      return pgcd(b, a % b);

  } else {

      return Math.abs(a);

  }

}

console.log(pgcd(first,second));

*/