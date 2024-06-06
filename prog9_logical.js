a=10
console.log(`5<a<20 ${5<a && a<20}`); //true
console.log(`5<a<20 ${5<a || a<20}`); //true

a=15
console.log(`5<a<25 ${5<a && a>25}`); //T && F = False
console.log(`5<a<25 ${5<a || a>25}`); //T || F = True

a=8
console.log(`5<a<10 ${5<a && a>10}`); // T && F = False
console.log(`5<a<10 ${5<a || a<10}`); // T || T = True

