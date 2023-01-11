function isPrime(n) {

    if(n == 1){
        return false;
    }

    for(let i=2; i<n; i++){

        if(n % i == 0) {
            return false;
        }
        
    }

    return true;

}

console.log(`is 21 a prime number: ${isPrime(21)}`);
console.log(`is 7 a prime number: ${isPrime(7)}`);
console.log(`is 1 a prime number: ${isPrime(1)}`);