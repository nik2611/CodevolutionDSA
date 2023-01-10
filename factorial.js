function factorial(n) {
    let factorial = 1;
    for(let i=2; i <= n; i++) {

        factorial *= i;

    }
    return factorial;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(0));