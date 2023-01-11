function isPrime(n) {

    if(n == 1){     // better if used n < 2
        return false;
    }

    for(let i=2; i<n; i++){  //Time Complexity is linear O(n) for this approach

        if(n % i == 0) {
            return false;
        }
        
    }

    return true;

} 

/* Optimized primality approach
function isPrime(n) {

    if(n == 1){     // better if used n < 2
        return false;
    }

    for(let i=2; i<= Math.sqrt(n); i++){  //Time Complexity is O(sqrt(n)) for this approach

        if(n % i == 0) {
            return false;
        }
        
    }

    return true;

} */

console.log(`is 21 a prime number: ${isPrime(21)}`);
console.log(`is 7 a prime number: ${isPrime(7)}`);
console.log(`is 1 a prime number: ${isPrime(1)}`);