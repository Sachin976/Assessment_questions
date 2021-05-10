let new_arr = []
const arr = [1,2,3,2,4,1,4,3,1,4,3,4,1,3,5]

//length function
const len =(arr) => {
    let l = 0
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

//sort function
const sort = (arr) =>{
    for(let i = 0; i < len(arr); i++){
        for(let j = i+1; j <= len(arr); j++){
            if(arr[j] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }
    return arr
}

sort(arr);
new_arr.push(arr[0])

//remove duplicates
for(let k =1; k <len(arr); k++){
    if(arr[k] === arr[k-1]){
        continue
    }else{
        new_arr.push(arr[k])
    }
}

console.log(new_arr)


