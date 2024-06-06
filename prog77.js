//STUDENT OBJECT -get,add,update,delete.
student={
    rollNo:1,
    name:'Ammu',
    class:'plus two',
    subject:'computer science',
    
}
//get-access
for(let key in student){
    console.log(key);
}
console.log('--------------------------------------------');

//add
student["marks"]=90
console.log(student);
console.log('--------------------------------------------');

//update
student.rollNo+=1
console.log(student);
console.log('--------------------------------------------');

//delete
delete student.marks
console.log(student);
console.log('-------------------------------------------------');
