// You are given a string A, of length N, and a character K. Find all the substrings of A, that start with K. Refer the sample I/O for better understanding.

// Note: The string contains lower case letters only.


function substringsStartingWithK(N,A,K){
   
    let count = 0;
for(i=0; i<N; i++){
    let bag = "";
    for(j=i; j<N; j++){
        bag = bag + A[j];
        if(bag[0]===K){
            count++
        }
    }
}
console.log(count);
}
