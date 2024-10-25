var a=3000;
var b=2000;
var c=(a+b);//addition
console.log(c)
var x=(a-b);//subtraction
console.log(x)
var y=(a*b);//multipliction
console.log(y);
var z=(a/b);//division
console.log(z);
//increment
var d=++a;
console.log(d)
//decrement
var q=5;
var e=--q;
console.log(e)
//modulus
var m=(a%b);//3000%2000=1(quotient)//3000-2000*1=1000(reminder)
console.log(m)
var a=5;
var b=3;
var s=(a%b);//5%3= 
console.log(s)
var a=7;
var b=20;
var s=(a%b);//5%3= 
console.log(s)
//Assignment 
var a=16;
var b=16;
var c=(a==b);//checks only value
console.log(c);
var a=16;
var b="s";//"16"
var c=(a==b);//checks both value& datatype
console.log(c);
var a=16;
var b=17;
var c=(a>=b);//false
console.log(c);
var a=16;
var b=16;
var c=(a>=b);//true
console.log(c);
//Trenary(?():())
let u=5>3 ?"True":"False";
console.log(u)
let t=20<15 ?"True":"False";
console.log(t)
//logical &&(and)
var e=3;
var f=2;
var g=1;
var h=(e>f&&f>g);//both satisty (true)
console.log(h);
var i=(e<f && f>g);// one satisfy (false)
console.log(i);
var j=(e<f && f<g);// one satisfy (false)
//||(or)
console.log(j);
var k=(e<f || f>g);// one satisfy (true)
console.log(k);
var k=(e>f || f>g);// both satisfy (true)
console.log(k);
//!(not)
var a=5;
var b=6;
var c=(a>b);
console.log(!c)//opposite