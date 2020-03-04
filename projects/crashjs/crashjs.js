console.log('hello world')
//prompt('say hi');
//let name ='huda';
//name='dina';
//console.log(name)
console.error("this is a error");
console.warn("this is a warning");

///data types
 /*const name ='sara';
 const number =100;
 const isCOOL =true;
 const x =null;
 let y;
 console.log(typeof name)
 console.log(typeof y)*/


///concatantion
//let name ='sara';
//let number =100;

//console.log('my name is '+ name +' and my age is '+ number +' years old')

//templete string
let number =40;
let name ='huda';
console.log(`my name is ${name} and my age ${number} years old`)

const hello=(`my name is ${name} and my age ${number} years old`);
console.log(hello)

//////////////////////////////////////
const b='say hi., hello, good morning.';
console.log(b.length);
console.log(b.toUpperCase());
console.log(b.toLowerCase());
//console.log(b.substring(0,3).toUpperCase())
console.log(b.split(''));
console.log(b.split(','));
////////////


//ARRAYS
let furniture=new Array('chair', 'table', 'sofa', 'coach');
let f=['chair', 'table', 'sofa', 'coach'];
f[1]='mirror';
//or edit data
f.push('board');
f.unshift('board');
f.pop();

console.log(furniture[0])
console.log(f)
console.log(Array.isArray(f))
console.log(Array.isArray('f'))


///////////
//object literals
let person={
    fname:'jou',
    lname:'danial',
    age:44,
    hobbies:['soccer','tennis','reading'],
    address:{
        state:'losAnglos',
        city:'walen'
    },
    status:'m/a'
}
person.email='jou@info.com';

console.log(person);
console.log(person.fname,person.lname);
console.log(person.hobbies[0]);
console.log(person.address.city);
const JSONFormat=JSON.stringify(person);
console.log(JSONFormat)

///////////
//destructioning (ecma)
const {fname,lname,address:{state}}=person;
console.log(fname,lname);
console.log(state);
///////////////////
//ARRAYS DEALING WITH OBJECTS
let toDoList=[
    {
        id:1,
        task:'meeting with boss',
        isCompleted:true,
    },
    {
        id:2,
        task:'meeting with friends',
        isCompleted:false,
    },
    {
        id:3,
        task:'meeting with lovely',
        isCompleted:true,
    },
]


toDoList.forEach(function(hint){
console.log(hint);
})
for(let i=0; i<toDoList.length;i++){
    console.log(toDoList[i].isCompleted);
}

console.log(toDoList)
console.log(toDoList[1].isCompleted)
 
const toDoJson=JSON.stringify(toDoList);
console.log(toDoJson)  //json isnot used alot because print data as paragraph not by length and isnot irregular.
/////////////////////
//for loops
let students=['lila','sally','dalia','shhd'];

for(let i=0; i<students.length;i++){
    console.log(students[i]);
}
for(let todo of toDoList){
    console.log(todo)
}


//whlie loop
let n=[1,2,3,4,5];
let o=0;
 while(o<n.length){
    console.log(`${n[o]}`);
    o++
} 
for(let s of n){
    console.log(s)
}

////////////forEach
let Array1=[{
    name:'koky',
    age:12,
    interesting:['drawing','painting'],
    isHAPPY:true,
},
{
    name:'LOSY',
    age:22,
    interesting:['dRILLING','sewing'],
    isHAPPY:false,
},

]
/* Array1.forEach(function(elemant){
    console.log(elemant);
}) */
//////map
const map1=Array1.map(function(g){
    return g.name;
})
console.log(map1)
let map2=Array1.map(function(j){
    return j;
})
console.log(map2)
////////////
///filter
const filter1=Array1.filter(function(f){
    return f.isHAPPY==false;
}).map(function(f){
    return f.age;
})
console.log(filter1)
///////////////////
/*
|| or
&& and
*/ 
//ternary operator
const x=20;
let color= x<=12 ? 'red'    : 'black';
 
console.log(color)
///////
const s=90;
let c= s>70 ? 'red': 'blue';
/*if(s==30) {
    console.log('green');
} else if(s>20) {
    console.log('blue');
} else {
    console.log('yellow');
}*/
switch(c){
    case'red':
     console.log('red');
     break;
    case'blue':
     console.log('blue');
     break;
    default:
        console.assert('n/a');
        break; 

}
//////////////
//functions
let sum=(num1,num2)=> num1+num2;
console.log(sum(2,3)) ;

let title=(fn,ln)=> console.log(fn,ln);
console.log( sum('huda ','yousry'));

//constructor function
/*function PERSON (FIRSTNAME,LASTNAME, DATEOFBIRTH, JOB){
    this.FIRSTNAME=FIRSTNAME;
    this.LASTNAME=LASTNAME;
    this.DATEOFBIRTH=new Date(DATEOFBIRTH);
    this.getFullName=function(){ return `${this. FIRSTNAME} ${this. LASTNAME}`;}
    this.getBirthYear=function(){return`${this.DATEOFBIRTH.getFullYear()} `}
    this.JOB=JOB;
}*/
//or class
class PERSON{
    constructor(FIRSTNAME,LASTNAME, DATEOFBIRTH, JOB){
        this.FIRSTNAME=FIRSTNAME;
        this.LASTNAME=LASTNAME;
        this.DATEOFBIRTH=new Date(DATEOFBIRTH);
        this.JOB=JOB;
    
    }
    getFullName=function(){ return `${this. FIRSTNAME} ${this. LASTNAME}`;}
    getBirthYear=function(){return`${this.DATEOFBIRTH.getFullYear()} `}
}




const PERSON0=new PERSON('Sara','Alaa','4-5-2000','teacher')
const PERSON1=new PERSON('SALMA','ASHRAF','3-4-1990','teacher')
console.log(PERSON0.DATEOFBIRTH.getFullYear())
console.log(PERSON1. getFullName())
console.log(PERSON0.getBirthYear())


/*
//dom single selector
console.log(window);
//window.alert(1)
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'))
console.log(document.querySelector('.container'))

            ///////or/////////
const FORM=document.getElementById('my-form');
console.log(FORM)


//multiple selector
console.log(document.querySelectorAll('.item'));
//or//
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))



//dealing with forEach
/*const items=document.querySelectorAll('.item');
items.forEach((item)=> console.log(item))*/

/*
//i want to remove items
let items= document.querySelector('.items');
//items.remove();
//items.lastElementChild.remove()

//i want edit textcontent of any data
items.firstElementChild.textContent='say hi';
items.children[1].innerText='welcome';
items.children[2].innerHTML='<h2>hello</h2>';
items.style.color='yellow'

//////
//style
let btn= document.querySelector('.btn');
btn.style.color='white';
btn.style.background='purple';


 btn.addEventListener('click',(d)=>{
    d.preventDefault();   /*not to reload page */
    /*console.log('click');}) 

btn.addEventListener('click',(d)=>{
    d.preventDefault();   /*not to reload page */
    /*\console.log(d);
})
btn.addEventListener('click',(d)=>{
    d.preventDefault();   /*not to reload page */
    //document.querySelector('#my-form').style.background='#ccc';
  /* document.querySelector('body').classList.add('bg-dark');
    console.log(d.target.className);
})

//or
/*let myForm= document.querySelector('#my-form');
myForm.style.background='#ccc'*/



/////////////








