function powerOfTwo(n) {

    while(n%2 == 0){
       n /= 2;                // Big(O) is O(logn)
    }

    if (n == 1){
        return true;
    }
    else{
        return false;
    }

}

console.log(powerOfTwo(-16));
console.log(powerOfTwo(12));

/* Better approach with O(1) constant time complexity

function powerOfTwo(n) {

    if (n < 1){
        return false
    }
    return (n & (n-1)) === 0;

} 
*/


