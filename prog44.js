fruits=['apple','mango','strawberry','kiwi','pineapple']
console.log(fruits);
//for
for(index=0;index<fruits.length;index++){
    console.log(fruits[index]);
}
//in
for(let i in fruits){
    console.log(fruits[i]);
}
console.log('----------------------------------------------------');
//of
for(let i of fruits)
console.log(i);