// Rotate by 180

function rotateBy180(N, matrix){
    for(i=N-1; i>=0; i--){
        let bag = "";
         for(j=N-1; j>=0; j--){
            bag = bag + matrix[i][j]+" ";
        }
    console.log(bag);
    }
  }