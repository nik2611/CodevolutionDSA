function powerOfTwo(n) {

    while(n%2 == 0){
       n /= 2;
    }

    if (n == 1){
        return true;
    }
    else{
        return false;
    }

}

console.log(powerOfTwo(8));
console.log(powerOfTwo(13));
