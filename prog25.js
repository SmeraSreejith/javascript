//w.a.p where loop can iterate up to 10 but print till 5


for(i=1;i<=10;i++){
    if(i<=5){
    console.log(i);
}
}
//or
console.log('-----------------------')
for(i=1;i<=10;i++){
    console.log(i);
    if(i>=5){
    break//not exit from if , it exits from the loop- to forcefully exit from a loop
}
}

