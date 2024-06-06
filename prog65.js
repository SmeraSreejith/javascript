//slice

a=[11,12,13,14,15,16,17,18,19,20]
console.log(a);
console.log('-----------------------------------------');
//create an array consisting first 3 number  from the given
b=a.slice(0,3) // last index is not included
console.log(b);
console.log('-----------------------------------');
//create a new array having the numbers 14,15,16,17
c=a.slice(3,7)
console.log(c);
console.log('------------------------------------');
//create a new array having the numbers 18,19,20
//d=a.slice(7) or
 d=a.slice(-3)
console.log(d);
console.log('--------------------------------------');