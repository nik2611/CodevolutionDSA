//check if the array of numbers has prime numbers and return an array of prime numbers from it

let arr = [1, 8, 3, 4, 5, 6, 7, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 25, 29, 30, 31, 38, 41];
//let arr=[54,89,61,73,99,111,125]


function primeNumber(arr) {
    let prime = [];
    let result = false;
    for (let i=0;i<arr.length;i++) {
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j == 0) {
               delete  arr[i]
            }
        }
    }
    return arr
}
console.log("Resultant prime numbers array", primeNumber(arr));