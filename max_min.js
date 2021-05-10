const arr = [1,5,2,4,52,3,21,54,86,25,78,34,29,62,8];
let max = 0;
let min = 99;
//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

for(let i= 0; i <= len(arr);i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i]< min){
        min = arr[i];
    }
}
console.log(`highest number in the array is: ${max}`);
console.log(`lowest number in the array is: ${min}`);

