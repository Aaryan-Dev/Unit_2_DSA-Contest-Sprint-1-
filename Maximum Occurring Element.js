// Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

// If there are two elements present the maximum number of times, print the one which comes first in the array.


function maximumOccuringElement(A,N){
    
    let obj  = {};
    
    for(i=0; i<N; i++){
        let key = A[i];
        if(obj[key]===undefined){
            obj[key]=1;
        }else{
            obj[key]++;
        }
    }
    
    let arr = [];
    let arr1 = [];
    for(let k in obj){
        arr.push(obj[k]);
        arr1.push(k);
    }
    let max = -Infinity; 
    for(j=0; j<arr.length; j++){
        if(arr[j]>max){
            max = arr[j];
        }
    }
    console.log(arr1[arr.indexOf(max)]);
}
    


