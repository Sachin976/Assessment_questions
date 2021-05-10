const s = "hello"
const s1 = 'naman'

//length function
const len = (s) =>{
    let l = 0
    while(s[l] !== undefined){
        l++
    }
    return l
}
//Palindrome function
const palin = (s) =>{
    let arr=[]
    for(let i = len(s); i>=0;i--){
        arr.push(s[i])
    }
    arr.shift()
    let rev_s = arr.join("")
    if(rev_s === s){
        console.log("Given string is palindrome")
    }else{
        console.log("Given string is not a palindrome")
    }
}

palin(s)
palin(s1)

