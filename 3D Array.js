// You are given a 3D Array, of N layers, M rows, and K columns. You have to take the input, and print the 3D Array in the form as mentioned in the sample test case.


function Array3D(N,M,K,array) {
 
    for(i=0; i<N; i++){
         
        for(j=0; j<M; j++){
            bag = "";
            for(l=0; l<K; l++){
              bag = bag + (array[i][j][l])+" ";
            }
            console.log(bag);
        }
    }
    
   }