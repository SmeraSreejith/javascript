//pattern printing


//# # # #
//# # # #
//# # # #
//# # # #

//w.a.p to print the given pattern

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+'#'+' '
    }
    console.log(str);
}
console.log('-------------------------------------');

//1 1 1 1
//2 2 2 2
//3 3 3 3
//4 4 4 4

for(row=1;row<=4;row++){
    str=''
    for (col=1;col<=4;col++){
        str=str+row+' '//' ' for space between rows and columns 
    }
    console.log(str);
   
}