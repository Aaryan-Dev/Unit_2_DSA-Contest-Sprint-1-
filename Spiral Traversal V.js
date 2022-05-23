// You are given a square matrix of size N x N.

// You have to print the spiral traversal of the matrix.

// Refer the figure given below for better understanding.


function spiralTraversalV(N, matrix){
    
    
    let top=0;
   bottom = N-1;
   let  left = 0;
   right = N-1;
    
    bag = "";
   count = 0;
   while(count<N*N){
   for(i=top; i<=bottom; i++){
       bag = bag + matrix[i][right]+" ";
       count++
   }
   right--
   for(j=right; j>=left; j--){
       bag = bag + matrix[bottom][j]+" ";
       count++
   }
   
   bottom--    
    for(k=bottom; k>=top; k--){
       bag = bag + matrix[k][left]+" ";
       count++
   }   
   left++
     for(l=left; l<=right; l++){
       bag = bag + matrix[top][l]+" ";
       count++
   }  
   top++
}
       console.log(bag);
}