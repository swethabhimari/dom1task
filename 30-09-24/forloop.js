//1.using for loop 
 for(var a=1;a<=10;a++)
 {
     console.log(a);
 }
 //using while loop
var b=1;
while(b<=10)
{
    console.log(b);
     b++;
 }
 //using do-while loop
let text="";
let i = 1
do {
  text += i                //concate i value into text
  i++;
}
while (i <= 10);{
    console.log(text);
}

let c= 1;

do {
    console.log(c);
    c++;
} while (c <= 10);

// //2.even numbers
// //using for loop
var num=20;//limit=20
for(let i = 0; i<=num; i++){
if(i%2===0)//checks if num is even
    {
    console.log("even number=", i)
}
}
// //using while
var num1=2;
while(num1<=20)//limit =20
    {
    console.log("num even=",num1)
num1+=2;}
//using do while
let e=2;
do{
    console.log(e);
    e+=2;// increment by 2 to get next even number
}while(e<=20)
//3.odd numbers
//using for loop
for (let i = 1; i <= 20; i += 2) {
    console.log("odd number=",i);
}
// //using while loop
 var n=1;
while(n<=20)
{
    console.log("odd num=",n)
    n +=2;
}
// //do while loop
var n1=1;
do{
    console.log(n1);
    n1+=2;
}while(n1<=20)
//4.using for loop
let marks = 40; 

if (marks >= 35 && marks <= 45) {
    console.log("Grade: D");
} else {
    console.log("Marks do not correspond to Grade D");
}
