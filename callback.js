students= [
    {stuName : "dhruv", stuID : 1} ,
    {stuName: "naman", stuID : 2}
];

function enrollStudent (student,callback){
    setTimeout(()=>{
        students.push(student);
        callback();
    },3000)
}

function showStudent(){
    setTimeout(()=>{
        let str = " ";
        students.forEach((element) => {
            str+=`<li>${element.stuName}</li>`
        });

        document.getElementById("list").innerHTML=str;
    },2000)
}

enrollStudent({stuName:"mayank" , stuID : 3},showStudent);
//showStudent();