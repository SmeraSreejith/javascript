//nested loops
//w.a.p to display all primenumbers from 2-50

for(i=2;i<=50;i++){
    let flag=0
    for(j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break
        }
    }
    if(i>0 && flag==0){
        console.log(i);
    }
}


