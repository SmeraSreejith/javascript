//w.a.p to check whether the given three digit number is amstrong or not

num=153
temp=num
sum=0
while(temp>0){
remainder=temp%10;
sum+=remainder*remainder*remainder
temp=Math.floor(temp/10)

}
if(sum==num)
{
    console.log(`${num} is an armstrong number`);
}
else{
    console.log(`${num} is not an armstrong number`);
}


num1=1634
power=(num1+'').length
temp=num1
remainder=0
sum=0
while(num1>0){
    remainder=num1%10
    sum=sum+remainder**power
    num1=Math.floor(num1/10)
}
if(temp==sum){
    console.log(`Armstrong`);
}
else{
    console.log(`not armstrong`);
}
temp==sum?console.log(`Armstrong`):console.log(`not armstrong`);