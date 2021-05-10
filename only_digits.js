//To check if there are only digits in a given string

const string_1 = "hello@1234";
const string_2 = "12346481379";

//length function
const len = (string) =>{
    let l=0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}

const check_only_digits = (string) =>{
    for(let i = 0; i < len(string); i++){
        let temp = string[i];
        if(!"1234567890".includes(temp)){
            console.log("String contains characters");
            return;
        }   
    }
    console.log("String only contains digits");
}
check_only_digits(string_1);
check_only_digits(string_2);
