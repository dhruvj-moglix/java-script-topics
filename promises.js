/*
function func1() {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if(!error){
                console.log('promise fulfilled');
                resolve();
            }
            else{
                console.log("not resolved");
                reject("not fulfilled");
            }
        },2000)
    })
}

func1().then(() => {
    console.log("thanku for resolving my issues"); //if resolved this function is called
    
}).catch(() => {
    console.log("holy mother of god"); //if rejected this fucntion is called 
});
*/



students= [
    {stuName : "dhruv", stuID : 1} ,
    {stuName: "naman", stuID : 2}
];

function enrollStudent(student)
{
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            students.push(student);
            resolve();
        },1000)
    })
}

function showStudent(){
    setTimeout(()=>{
        let str = " ";
        students.forEach((element) => {
            str+=`<li>${element.stuName}</li>`
        });

        document.getElementById("list").innerHTML=str;
    },3000)
}

let newStudent={stuName : "mayank", stuID : 3};
enrollStudent(newStudent).then(showStudent).catch((err) => {
});

myObj={};
myObj.name="dhruv";
myObj.marks=99;