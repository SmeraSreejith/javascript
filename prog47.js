arr=[10,11,12,3,2,4]
//w.a.p to check whether 2 is present or not
searchitem=21
ispresent=false
for(let num of arr){
    if(num==searchitem){
        ispresent=true
        break
    }
}
console.log(ispresent?'present':'not present');
console.log('--------------------------------------------------------------------');

            //[a1,a2,a3] a3+a2 a1+a3 a1+a2
//input array=[4,5,6]
//output array=[11,10,9]
input=[4,5,6]
//sum=4+5+6=15 
sum=0
for(let i of input){
  sum=sum+i
}
/*console.log(sum);*/
output=[]//empty array initialised
for(let num of input){
    output.push(sum-num)
}
console.log(output);
