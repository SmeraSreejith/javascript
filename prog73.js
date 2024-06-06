sentence='good morning all'

//w.a.p to print all vowels in the given sentence.(a,e,i,o,u)
vowels=['a','e','i','o','u','A','E','I','O','U']
character=sentence.split('')
console.log(character);
for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
    }
}
console.log('-------------------------------------');
//another method
character.filter(char=>vowels.includes(char)).forEach(element => {console.log(element);});
console.log('------------------------------------------------');

Array.from(sentence).filter(char=>vowels.includes(char)).forEach(element=>{console.log(element);});