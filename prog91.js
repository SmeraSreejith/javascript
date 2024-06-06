//rest operator

class A{
    method(...arg){
     console.log(arg);
     //sum
     console.log(arg.reduce((n1,n2)=>n1+n2));
    }
    
}
//object
const obj=new A()
obj.method(5,10)


