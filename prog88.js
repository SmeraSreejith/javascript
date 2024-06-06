//object inheritance

baleno={
    model:'hatch back',
    manufacturer:'maruti',
    variant:['automatic','manuel']
}
glanza={
    manufacturer:'Toyota'
}
glanza.__proto__=baleno

console.log(glanza.model);
console.log(glanza.variant);
console.log(glanza.manufacturer);