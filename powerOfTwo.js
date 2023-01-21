
function powerOfTwo(n) {

    if(n < 1){
        return false;
    }
    
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
//console.trace("stack trace errors"); //Was learning NodeJS concepts which are not related to the current problem
console.log(arguments); 

/* Better approach with O(1) constant time complexity

function powerOfTwo(n) {

    if (n < 1){
        return false
    }
    return (n & (n-1)) === 0;

} 
*/


