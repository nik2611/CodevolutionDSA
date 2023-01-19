function powerOfTwo(n) {

    while(n%2 == 0 && n !== 2){
       n /= 2;
    }

    if (n == 2){
        return true;
    }
    else{
        return false;
    }

}

console.log(powerOfTwo(148));
console.log(powerOfTwo(130));
