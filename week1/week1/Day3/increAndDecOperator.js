// increment --> increase a value +1
let a=4 , b=12
// pre incremental --> ++variableName
console.log(++a)// 5
console.log(a)// 5
// post incremental --> variableName++
console.log(b++) // fetching
console.log(b) // 12+1
// decrement --> decrease the value of variable -1
let c=23, d=33
// strict equality operator check for 2 rules 
// rule no.1 --> same value to be present in the LHS and RHS
// rule no.2 --> same datatype is to be present in the LHS and RHS
console.log(d=="33")// true or false
// pre decremental operation
console.log(--c)// 22
console.log(c) //22

// post decremental operation
console.log(d--) //33
console.log(d) //32
// javascript --> dynamic language
console.log(typeof d)
d="javascript"
console.log(typeof d)
d=false
console.log(typeof d)