var fiboSeq = [0,1];
var n = 7; 

if(n <= 1) {
    console.log(`Entered wrong input.\nPlease enter n value greater than one`);
  }

else if (n == 2) {
    console.log(`fibonacci sequence is ${fiboSeq}`)
  }
  
else {
for(let i=0; i <= n-1; i++){  //Time complexity is O(n)

  if(i > 1){
    let fibo = fiboSeq[i-1] + fiboSeq[i-2];
  fiboSeq.push(fibo);

  }
}
    console.log(`fibonacci sequence is ${fiboSeq}`);
}


/* Better way with small modifications to my approach

const fiboSeq = [0, 1];
for(let i=2; i < n; i++){  //Time complexity is O(n)

  
    fiboSeq[i] = fiboSeq[i-1] + fiboSeq[i-2];
    
}
    console.log(`fibonacci sequence is ${fiboSeq}`);

*/