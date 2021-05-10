let string1 = "ABCD"
let string2 = "CDAB"
let string4 = "ACDB"
let string3 = "hellosachin"

//length function
const len = (string) =>{
    let l=0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}
//slicing function
const cut = (string,start,end) =>{
    let new_string = ""; 
    for(let i = start;i <=end; i++ ){
        new_string += string[i]
    }
    return new_string
}

//function to check strings rotation
const rotation = (string_1,string_2) =>{
    if(len(string_1) === len(string_2)){
        let i = 0;
        for(i; i<=len(string_1); i++){
            string_2 = cut(string_2,1,len(string_2)-1) + string_2[0]
            if(string_1 === string_2){
                console.log("Congrats!! Strings are rotation of each other")
                break
            }
        }
        if(i > len(string_1)){
            console.log("Sorry!! Strings are not rotation of each other")
        }
    }else{
        console.log("Sorry!! Strings are not rotation of each other")
    }
}

rotation(string1,string2)
rotation(string1,string3)
rotation(string1,string4)