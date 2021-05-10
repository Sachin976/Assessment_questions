//To find out the duplicate characters from a given string

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}
const string = "hello_world_how_are_you";
const arr = string.split("");
let duplicate = {}

for(let i = 0; i < len(arr); i++){
    let c = 0;
    for(let j = i+1; j <=len(arr); j++){
        if(arr[i] === "_"){
            continue;
        }else if (arr[i] == arr[j]){
            c++;
        }
    }
    let text = "duplicates_of_" + arr[i];
    if(c >= 1){
        if(duplicate[text]){
            continue;
        }else{
            duplicate[text] = c;
        }

    }

}
console.log(duplicate);
