arr=[10,11,12,3,2,4]
//sort the given array in ascending order
//algorithm
//get the search item
searchitem = 2
//initialize lower index and upper index
low=0
up=arr.length-1
isPresent =false
count=0
//sort the given array
arr.sort((a,b)=>a-b)
console.log(arr);
//repeat the above statement until low and up value meets
while(low<=up){
    count++
    //mid=(low+up)/2
    mid =Math.floor((low+up)/2)

    //mid=searchitem  ---> item found display

    if(arr[mid]==searchitem){
        isPresent=true
        break
    }
    //mid>searchitem ---> up=mid-1
    else if(arr[mid]>searchitem){
        up=mid-1
    }
    //mid<searchitem ---> low=mid+1
    else{
        low=mid+1
    }
}
console.log(count);// no. of iterations
console.log(isPresent?'present':'not present');