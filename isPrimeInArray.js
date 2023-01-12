//check if the array of numbers has prime numbers and return an array of prime numbers from it

let arr = [1, 8, 3, 4, 5, 6, 7, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 25, 29, 30, 31, 38, 41];
//let arr=[54,89,61,73,99,111,125]


function primeNumber(number) {
    let prime = [];
    let result = false;
    
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
               return "is not a prime number"
            }
        }
        return "is a prime number"
    }
    


    for (let i=0;i<arr.length;i++) {
console.log(`${arr[i]}, ${primeNumber(arr[i])} \n`);
    }