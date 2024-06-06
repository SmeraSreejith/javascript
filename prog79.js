array=[10,20,30,40,30,20,50,30,60,70,10,40,80]
//10-2,20-2,30-3,40-2,50-1,60-1,70-1,80-1
//w.a.p to find the number count from the given array and display as an object

obj={}
/*for(num of array){
    if(num in obj){
        obj[num]+=1
       
    }
    else{
        obj[num]=1
    }

}
console.log(obj);*/
array.forEach(item =>item in obj? obj[item]+=1:obj[item]=1)
console.log(obj);

