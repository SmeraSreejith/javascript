//polymorphism
//method overloading
class A{
    method(){
     console.log('inside first method');
    }
    method(n){
        this.n1=n
        console.log(`inside methoda with argument ${this.n1}`);
    }
    method(n,m){
        console.log(`inside methoda with argument ${n} and ${m}`);
    }
}
//object
const obj=new A()
obj.method(5)

