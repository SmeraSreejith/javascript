expense=[12000,24000,35000,10000,54000,40000]
//find the lowest expense
//find the highest expense
//find the total expense

let max=expense[0]
let min=expense[0]
total=0
for(i=0;i<expense.length;i++){
    if(expense[i]>max){
        max=expense[i];
    }
    else if(expense[i]<min){
        min=expense[i];
    }
    total=total+expense[i];
}
console.log(max);
console.log(min);
console.log(total);