//Adding

var x = 40;
let y = 60;
const z = 10;
var a =x+y+z;
console.log(a)



// Multiplication using function
function mul(a,b) {
    return(a*b);
}
console.log(mul(5,4));



//Subtraction using constant and let variable in block
function sub(a,b) {
    var a = 50;
    var b = 10;
    return(a-b);
}
console.log(sub());



// divide
function div(a,b) {
    return(a/b);
}
console.log(div(8,4));




// Exponentiation
function pow(a,b) {
    return(a**b);
}
console.log(pow(8,2));




// increament

let p = 5;
p++;
let s = p;
console.log(s)



// Double decreament
function dec(){
    var p = 5;
    p--;
    var s = p;
    s--;
    var z = s;
    return(z)
}

console.log("This is Double Decreament"+ " " +  dec())


// power keyword(Math.pow)
function power(){
    var a =4;
    return(Math.pow(a,2))

}
console.log(power())