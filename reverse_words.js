const string = "The quick brown fox jumps over the lazy dog";
//length function
const len = (arr) =>{
    let l =0;
    while(arr[l] !== undefined){
        l++
    }
    return l;
}

let arr = string.split(" ");
let reverse_arr = [];
let length = len(arr)
let end = length -1;
let i = 0;
while(i < length){
    reverse_arr[i] = arr[end];
    end--;
    i++;
}

console.log(reverse_arr.join(" "))
