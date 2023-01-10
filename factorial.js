function factorial(n) {
    let factorial = 1;
    for(let i=2; i <= n; i++) {

        factorial *= i;  // Time complexity is O(n)

    }
    return factorial;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));