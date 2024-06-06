//[id,name,class,subject,marks]
//[1,'ammu',5,'maths',50]
//[2,'arun',5,'maths',48]
//[3,'sanvi',5,'maths',47]

/*class Student{
    studId
    studName
    studClass
    studSub
    studMarks


constructor(studI,studNme,studCls,studSubj,studMar){
    this.studId=studI
    this.studName=studNme
    this.studClass=studCls
    this.studSub=studSubj
    this.studMarks=studMar
}
display(){
    console.log(`student name is ${this.studName}`);
}
}
const obj=new Student(1,'ammu',5,'maths',50)
obj.display()
const obj1=new Student(2,'arun',5,'maths',48)
obj1.display()
*/
class Student{
    //constructor
     constructor(id,name,mark){
        this.stid=id
        this.stname=name
        this.stmarks=mark
        this.studentDisplay()
     }
     //method
     studentDisplay(){
        console.log(`Student details : id is ${this.stid}, name :${this.stname}, mark is : ${this.stmarks}`);
     }
}
const st1 = new Student(1,'manu',100)
const st2 = new Student(2,'anu',90)
const st3 = new Student(3,'priya',60)