str='hello'

console.log(str[3]);

//w.a.p to check whether the given string is palindrome or not
str='malayalam'

start=0
end=str.length-1

ispalindrome=true
while(start<end){
    if(str[start]!=str[end]){
        ispalindrome=false
    }
    start++
    end--
}
console.log(ispalindrome?'palindrome':'not palindrome');
console.log('-----------------------------------------');
//another method
pal=''
for(i=str.length-1;i>=0;i--){
    pal += str[i]
}
console.log(str==pal?'palindrome':'not a palindrome');