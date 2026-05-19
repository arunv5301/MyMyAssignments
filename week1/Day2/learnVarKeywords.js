var firstName="Arun"
var firstName="Jothi"// redeclaration is allowed
console.log(firstName) 
firstName="Dinesh" // reinitialization is allowed
console.log(firstName) 
console.log(empNo) // hoisting is allowed
var empNo= 1234 
// keyword 
function print(){//body // function scope
// local variable    
 var empAge=25 
 {
    //local variable
    var empPhno=897979697987;  
 }
 console.log(empPhno)
}
print()
//console.log(empPhno)

