var car={
    name:'boleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10lakh'
}

//w.a.p to print model and manufacturer name of the given car
console.log(`model is ${car["model"]} and manufacturer is ${car["manufacturer"]} `);
console.log('-------------------------------------------');
//w.a.p to add variant key to the car object with value as 'manuel'
car["variant"]=['manuel']
console.log(car);
console.log('------------------------------------------------');
//w.a.p to add a new value 'automatics' to the key variant
car.variant.push("automatic")
console.log(car);
console.log('---------------------------------------------------');
//w.a.p to add a new key as 'color' with value as red,blue and white.
car["color"]=['red','blue','white']
console.log(car);
