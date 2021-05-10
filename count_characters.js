//To count characters in a string

const string = "pneumonoultramicroscopicsilicovolcanoconiosis";
let count = {};

//length fucntion
const len = (string) =>{
    let l = 0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}


for(let i = 0; i < len(string) ;i++){
    let variable = string[i];
    if(count[variable]){
        count[variable]++;
    }else{
        count[variable] = 1;
    }
}

console.log(count);
