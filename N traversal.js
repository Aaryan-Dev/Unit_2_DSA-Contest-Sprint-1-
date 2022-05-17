// The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

// Next N lines contain N space separated integers, denoting the values of the matrix.



// You are given a matrix of size n x n. Find theNtraversal of the matrix. Refer the following figure for better understanding.


function nTraversal(matrix) {
  
    bag = "";
        for(i=matrix.length-1; i>0; i--){
        bag = bag + matrix[i][0] + " ";
        }
        
        for(i=0; i<matrix.length; i++){
            for(j=0; j<matrix.length; j++){
                if(i==j){
                    bag = bag + matrix[i][j]+ " ";
                }
            }
        }
        
        for(j=matrix.length-2; j>=0; j--){
            bag = bag + matrix[j][matrix.length-1]+ " ";
        }
    console.log(bag);
  }
