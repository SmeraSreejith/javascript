//w.a.p to print common numbers from a given array
p=[10,11,12,20,30,44,46]
q=[11,20,25,30,33,46]
//commmon=[11,20,30]


//index for p
a=0
//index for q
b=0

isPresent=false
while(a<p.length && b<q.length){
    if(p[a]==q[b]){
        console.log(p[a]);
        isPresent=true
        a++
        b++
    }
    else if(p[a]>q[b]){
        b++
    }
    else{
        a++
    }
}
!isPresent && console.log('no common numbers');

