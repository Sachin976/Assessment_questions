//To reverse a given string through recursion

const string = "HelloWorld";

//length function
const len = (string) =>{
    let l=0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}
let end = len(string) - 1;
const reverse = (string,end) =>{
    if(end < 0){
        return "";
    }else{
        let rev = string[end] + reverse(string,end-1);
        return rev;
    }
}
let reverse_string = reverse(string,end);
console.log(`Reverse of the string "${string}" is: ${reverse_string}`);
