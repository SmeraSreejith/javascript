expense=[12000,24000,35000,10000,54000,40000]
//find the lowest expense
lowest=expense[0]
for(let num of expense){
    //console.log(num);
    if(num<=lowest){
        lowest=num
    }
}
console.log(lowest);

//find the highest expense
highest=expense[0]
for(let num of expense){
    if(num>=highest){
        highest=num
    }
}
console.log(highest);
//find the total expense
sum=0
for(let num of expense){
    sum=sum+num
}
console.log(sum);





//console.log(typeof(expense));

