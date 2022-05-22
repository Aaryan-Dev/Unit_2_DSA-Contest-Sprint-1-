// You are given a matrix of size n x m , and two types of queries are to be performed on this matrix. The two types of queries are

// q = 1, for this type of query, the matrix is to be traversed, as shown in Fig. 1

// q = 2, for this type of query, the matrix is to be traversed as shown in Fig. 2


function masaiTraversalAndQueries(N, M, q, arr){
   
    let bag = "";
for(i=0; i<N; i++){
    if(i%2===0){
    for(j=0; j<M && q==1 ; j++){
        bag = bag + arr[i][j]+" ";
    }
    for(j=M-1; j>=0&& q==2 ; j--){
            bag = bag + arr[i][j]+" ";
        }
    }
    if(i%2!==0){
        for(j=M-1; j>=0 && q==1 ; j--){
            bag = bag + arr[i][j]+" ";
        }
        for(j=0; j<M && q==2; j++){
        bag = bag + arr[i][j]+" ";
    }
    }
}
console.log(bag);
}