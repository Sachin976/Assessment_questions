//To find all pairs of an integer array whose sum is equal to a given number

const number_to_check = 5;
const arr = [1,2,5,0,3,4,6,2,1,5,6,2,6,2]

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

for(let i = 0; i< len(arr); i++){
    for(let j = i+1; j<= len(arr); j++){
        if(arr[i] + arr[j] === number_to_check){
            console.log(arr[i],arr[j]);
        }
    }
}
