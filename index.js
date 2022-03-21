//Practice Lesson_2
//let box='hello';
////let anotherBox='Netherlands';

//let result = box + anotherBox

//let boolean=result>2;
//if(result>2){
//console.log('Hi!');
//}


//console.log(result);

//document.querySelector('input').addEventListener('change',(event)=>{
//let content = event.target.value; //получить данные из поля ввода
//    document.querySelector('.second-title').innerHTML=content;
//});
//Homework 1
let admin;
let user;
user = "Anna"
admin = user;
console.log(admin);

function lesson2() {  
    let admin;
    let user;
    user = "Anna"
    admin = user;
   alert (admin);    //output Anna
}  

//HomeWork 2
let user1 = 'ivan';
console.log(user1);

let prom = user1.charAt(0);
let newUser = user1.replace(user1.charAt(0), prom.toUpperCase()); 
console.log(newUser); //output Ivan

//HomeWork 3
//длинна статической строки
const str = 'Hello World! - ';

console.log(`${str} ${str.length}`);

//HomeWork 4
let a = '';
let b = 'bbb';
let c = false;

let test1 = !b.length === c; // true. b.length can be converted to true. !b.length = false. false===false = true
let test2 = a.length > b.length; // false length of strin a les then string b
let test3 = !a.length && !b.length; // false. empty string lenght = 0. !0 = true. 
let test4 = a === c; // false. different types always different