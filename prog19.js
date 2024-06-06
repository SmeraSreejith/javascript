//w.a.p to find the sum of 1-10 numbers or first 10 natural numbers

i=1
sum=0
while(i<=10){
 sum=sum+i
 //console.log(sum); no need to show sum of each iteration so it is placed outside the loop
 i++
}
console.log(sum);

//2   3   4     5  
//24 369 4936 61725
//2*12 3*123 4*1234 5*12345

n=5
i=1
str=""
pro=0
while(i<=n){
  str=str+i
  //console.log(str);
  i++
}
pro=n*str
console.log(pro);
console.log(`-------------------------------`);

//2+22 //3+33+333 //4+44+444+4444

m=4
j=1
str=""
sum=0
while(j<=m){
    str=str+m
    //console.log(str);
    sum=sum+Number(str)
    j++
}
console.log(sum);


