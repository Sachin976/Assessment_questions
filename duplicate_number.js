//To find out the duplicate of a number in an array

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}
const arr = [1,2,3,3,4,5,4,6,7,7,8,9];

for(let i = 0; i < len(arr); i++){
    for(let j = i+1; j <= len(arr); j++){
        if(arr[i] == arr[j]){
            console.log(`array has a duplicate number of: ${arr[i]}`);
        }
    }
}
