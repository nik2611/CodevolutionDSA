// module.exports = { 
    //param A : string
    //return a array of integers
    function solve(A){
   
        
        //console.log(array);

        let result = [0,0];

           
        for(let i =0; i < A.length; i++){

             if(A[i] > 0){
                result[0] += 1;
             }

             if(A[i] < 0){
                result[1] += 1;
             }
            
                    }

       console.log(result);

    }

       solve([1, 2, 3]);
       solve([1, 0, -1, 3, 4, 34, 6, -69, 0]);
//    };