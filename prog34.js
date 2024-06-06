//diamond shape
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

for(i=1;i<=10;i++){
    str=''
    if(i<5){
        for(spa=5;spa>i;spa--){
            str+=' '
        }
        for(j=1;j<=i;j++){
            str+=' *'

        }
    }
    else{
        for(spa=6;spa<=i;spa++){
            str+=' '
        }
        for(j=10;j>i;j--){
            str+=' *'
        }
    }
   console.log(str); 
}


console.log('-----------------------------------');

//* * * * * 
//  *   *
//    *
//  *   *
//* * * * *
for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=5;col++){
        if(row==1|| row==5 || col+row==6 || col==row){
            str= str+"* "
        }
        else{
            str=str+"  "
        }
    }
    console.log(str);
}



