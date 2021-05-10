//To find out the missing integer in an array of 1 to 100

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

let arr = [];

let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
for(let j = 0; j <= len(arr); j++){
    sum -= arr[j];
}


console.log(`missing number is: ${sum}`)
