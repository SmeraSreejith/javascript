//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
//a=[1,2,3,4]
// print all employee name 
console.log('employee name is :');
employee.forEach(emp => {console.log(emp[1]);});
console.log('--------------------------------------------------');

//print total numbers of employee
console.log(`total number of employee is ${employee.length}`);
console.log('-----------------------------------------------------');

//print developer employee details
console.log('developer employee details');
Developeremployeedetails=employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro))
//console.log(Developeremployeedetails);
console.log('------------------------------------------');

// print details of employee Laisha
console.log('details of employee laisha');
laisha=employee.filter(emp=>emp[1]=='Laisha').forEach(pro=>console.log(pro))
//console.log(laisha);
console.log('------------------------------------------------');

//print employee name whose salary>30000
console.log('employee name whose salary > 30000');
employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro[1]))
console.log('---------------------------------------------');

// print the employ name who have the highest salary
console.log('employee name who have the highest salary');
empsal=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(empsal[1]);
console.log('---------------------------------------------');
//lowest salary
console.log('employee name who have the lowest salary');
empsal1=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(empsal1[1]);
console.log('--------------------------------------------------');

//total salary expense of the company
console.log('total salary expense of the company');
totalex=employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(totalex);
console.log('----------------------------------------------');