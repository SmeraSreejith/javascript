//try-catch block
exp='10*2+5'
//eval-predefined function to evaluate the expression
result=eval(exp)
console.log(result);
console.log('task completed');

console.log('--------------------------------------------');
/*exp='**10*2+5'
result=eval(exp)
console.log(result);
console.log('task completed');*/ //rectifying error
exp='**10*2+5'
try{result=eval(exp)
console.log(result);
}
catch{
    console.log('check the eval expression');
}
finally{
    console.log('task completed');
}

