//array


//[id, name, designation, location, salary, experience]
arr=[1000,'Neel','developer','kochi',25000,3]

employee={
    id:1000,
    name:'neel',
    desg:'developer',
    age:35
}
console.log(typeof(arr));
console.log(typeof(employee));
console.log(arr[2]);
console.log(employee['desg']);
console.log(employee.name);
/*console.log(employee[key]);*/
//how to access a key from an object
//in method is used to follow the keys in object

console.log('-----------------------------------------------');
for(let key in employee){
    console.log(key);
}
console.log('----------------------------------------------------------');

//w.a.p to check whether 'emplocation' key is present in the given object
if('emplocation' in employee){
    console.log('present');
}
else{
    console.log('not present');
}
console.log('-------------------------------------------');

console.log(`emplocation key is ${'emplocation' in employee?'present':'not present'}`);

console.log('--------------------------------------------------');

//how to add a key:value pair in to an object
//objectname["key"]=value

//add experience to the given object employee

employee["experience"]=3
console.log(employee);
console.log('-------------------------------');


//check 'gender' key in the given employee. if present print 'yes' else add gender key to the given object with value as male
if('gender' in employee){
    console.log('yes');
}
else{
    employee["gender"]='male'
    console.log(employee);
}
console.log('----------------------------------------------');
'gender' in employee?console.log('yes'):(employee["gender"]='male',console.log(employee))
console.log('------------------------------------------------------');


//update a value in an object
employee.age+=5
console.log(employee);
console.log('-------------------------------------------------------------');

//how to delete a key from an object 
//delete method 
delete employee.age
console.log(employee);

console.log('--------------------------------------------');



