// Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

// Note: No element should be visited more than once.


function cirTraversal(matrix,N) {

    bag = "";
    
    if(N===1){
        bag = bag + matrix[0]+ " ";
    }
        
    
    for(i=N-1; i>0; i--){
        bag = bag + matrix[i][0] + " ";
    }
     
     for(j=0; j<N-1; j++){
         bag = bag + matrix[0][j]+ " ";
     }
     
     for(k=0; k<N-1; k++){
         bag = bag + matrix[k][N-1]+ " ";
     }
     
     for(l=N-1; l>0; l--){
         bag = bag + matrix[N-1][l]+ " ";
     }
     console.log(bag);   
    }

