//To find out the number of consonants and vowels in a given string

const string = "helloworld";

let count = {}
//length function
const len = (string) =>{
    let l=0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}

for(let i = 0; i<len(string); i++){
    if("aeiouAEIOU".includes(string[i])){
        let vowel = "Vowel";
        if(count[vowel]){
            count[vowel]++;
        }else{
            count[vowel] = 1;
        }
    }else{
        let consonants = "Consonants";
        if(count[consonants]){
            count[consonants]++;
        }else{
            count[consonants] = 1;
        }
    }
}

console.log(count);
