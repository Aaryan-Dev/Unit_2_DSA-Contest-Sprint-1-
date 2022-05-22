// Given a square matrix of size N x N. Rotate the matrix by 90 degrees in clockwise direction. Refer the sample I/O for better understanding.

function rotateBy90Clockwise(N, matrix){
    for(j=0; j<N; j++){
    let bag = "";
for(i=N-1; i>=0; i--){
        bag = bag + matrix[i][j]+" ";
    }
console.log(bag);
}
}
