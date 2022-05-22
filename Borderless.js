// You are given a matrix A of size N X M. Find the sum of all the elements in the matrix which do not lie at the border.

function sumWithoutBorders(N, M, matrix){
    
    let sum = 0;
    for(i=1; i<N-1; i++){
        for(j=1; j<M-1; j++){
            sum = sum + (matrix[i][j]);
        }
    }
    console.log(sum);
}
     