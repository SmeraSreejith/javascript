//w.a.p to print pairs whose sum is 6
b=[2,3,4,5]//(2,4)
sum=6
nopair=false
for(i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
        if(b[i]+b[j]==sum){
            nopair=true
            console.log(`${b[i]},${b[j]}`);
        }
    }
}
!nopair&&console.log('no such pair');

