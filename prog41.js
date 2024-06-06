//nested function

const global ='global'

const parent =()=>{
    let parentvariable ='PARENT'
    console.log(`parent variable is ${parentvariable}`);
   // console.log(`child variable is ${childvariable}`); cannot be accessed inside parent
    const child=()=>{
        let childvariable='CHILD'
        console.log(`parent variable is ${parentvariable}`);//can be accessed inside child
        console.log(`child variable is ${childvariable}`);
    }
  child()
}
parent()
