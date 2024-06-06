//w.a.p to find the first recursive letter -B
pattern='ABCBBCAACB'

obj={}
character=Array.from(pattern)

for(char of character){
    if(char in obj){
        console.log(char);
        break
    }
    else{
       obj[char]=1
    }
}
