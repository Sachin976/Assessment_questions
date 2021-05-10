//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [];
const length = len(arr1)
let end = len(arr1) -1;
let i = 0;
while(i < length){
    arr2[i] = arr1[end];
    end--;
    i++;
}
console.log(arr2)