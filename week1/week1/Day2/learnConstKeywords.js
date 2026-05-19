const firstName="Arun"
//const firstName="Jothi" // declaration is not allowed
// reintialization in not allowed
//firstName="Dinesh" // TypeError: Assignment to constant variable.
console.log(firstName) 
// console.log(empNo) //ReferenceError: empNo is not defined // hoisting is not allowed
// const empNo=1624
// function scope or blocked scoped
function print(){//body 
// local variable    
 const empAge=25 
 {
    //local variable
    const empPhno=897979697987; 
    console.log(empPhno) // Block scoped
 } 
}
print()
