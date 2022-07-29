/*const res =function(a,b)
{
    return a+b;
}
const a =res(2,3);
console.log(a);*/

/*function res(a,b)
{
    return a+b;
}
const a =res(4,3);
console.log(a);*/
 const a = {
    name : "dhruv",
    standard : "3",
    show : function(){console.log(this);} , 
    show2 : ()=>{console.log(this);}
 }
 a.show();
 a.show2();
 console.log(document.firstElementChild);

 function GeneralCar(givenName,topSpeed)
 {
    this.name = givenName;
    this.speed=topSpeed;
 }
 car1= new GeneralCar("alto",120);

 
