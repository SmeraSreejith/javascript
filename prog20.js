//w.a.p to find the reverse of a given number using while loop
num=123

//23/10=3
//2.3
remainder=0
reverse=0
console.log(`given number is`,num);
while(num>0){//123>0//12>0//1>0
remainder=num%10//0=123%10=3//12%10=2//1%10=1
reverse=(reverse*10)+remainder//0=0*10+3=3//3*10+2=30+2=32//32*10+1=321
num=Math.floor(num/10)//123/10=12.3=12//12/10=1.2=1//1/10=0.1=0
}
console.log(`reverse of given number is`,reverse);
console.log(`--------------------------------------------------`);

//w.a.p to check whether a given number is a palindrome or not
num2=12
remainder=0
reverse=0
temp=num2
while(num2>0){
    remainder = num2%10
    reverse =(reverse*10)+remainder
    num2=Math.floor(num2/10)
}
if(temp==reverse){
    console.log(`its a palindrome number`);
}
else{
    console.log(`its not a palindrome `);
}
temp==reverse?console.log(`its a palindrome number`):console.log(`its not a palindrome `);