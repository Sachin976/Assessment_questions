//To print out the first non-repeated character in a string

const string = "hello_there_how_are_you";
 
//length function
const len = (string) =>{
    let l = 0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}

let rep = "";
for(let i = 0; i< len(string)-1; i++){
    let c= 0;
    for(let j = i+1; j< len(string); j++){
        if(string[i] === string[j]){
            c++;
            if(!rep.includes(string[i])){
                rep += string[i];
                break;
            }
        }
    }
    if(!rep.includes(string[i]) && c ===0){
        console.log(`First non repeated character is: ${string[i]}`);
        break;
    }
}
