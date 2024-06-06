//w.a.p to check a given number is prime number or not
 //prime number- which have two factors -1 and the number itself 


 num=99
isprime=true
if(num>1){
 for(i=2;i<num;i++){
    if(num%i==0){
        isprime=false
        break
    }
 }
}
else{
    isPrime=false
}
isprime?console.log('its a prime number'):console.log('its not a prime number');

