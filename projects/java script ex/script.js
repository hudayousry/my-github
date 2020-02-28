//types of print on sc
  //console

console.log('hello')
//alert('javascript')
var x =('huda');
console.log(x)


// alert

/*var name ='Are you sure?'
alert(name)*/
//var message = confirm('are u sure?')

// prompt

//prompt('what is your name?', 'noName')


// types of variables:
var x=5;
var y = 4;
var z = x+y;
console.log(z)




var n;
var m;
function result(){
    var n= 6
    var m= 7
    console.log('my variable :',n,m)
}
result()
//data mutation
var firstName= 'huda';
var lastName = 'yousry';
var age= 23;
console.log(firstName,lastName,age)

firstName='sara';
lastName='soliman';
age=27;
console.log(firstName,lastName,age)
//another ytpe of data entring
console.log(firstName+' '+ lastName+' '+ age) 

console.log(typeof'sara')
console.log(typeof function name() {
    
})
console.log(typeof 33)
console.log(typeof null)
console.log(typeof new Date())



//if statement
var time='morning';
var greeting;
if(time == 'evening'){
greeting='good morning';
console.log(greeting)
}else{
  console.log('good afternoon')
}


//else if
var name= 'sara';
var age;

if(name=='huda'){
  age=23;
  console.log('my name is',name+' '+ 'and' + ' '+age+' '+'years old.')
}else if( name=='sara'){
  age=29;
  console.log('my name is',name+' '+ 'and' + ' '+age+' '+'years old.')
}else{
  console.log('no name')
}

//switch statement
/*
var a= 2+8;
switch(a){
  case 4:
    alert('Exactly')
    break;

  case 3:
    alert('too little')
    break;

  case 9:
    alert('too much')
    break;

   default:
     alert('i donot know this value')     
}
*/







//array
var users=['sara','ahmed','mohamed']
users[2]='huda';
console.log(users)

var users= new Array('sara','ahmed','mohamed')
console.log(users)
console.log(users[1])


var users=['sara',55,false,new Date() .getFullYear()]
console.log(users)

var users=['sara','ahmed','mohamed']
users.push(77,2000,false)
users.pop()
users.shift()
users.unshift(99,'roqia', true)
console.log(users)
console.log(users[6])
console.log(users.indexOf('roqia'))

var users=['sara','ahmed','mohamed']
users.push('alaa',30)
users.splice(0,3)
console.log(users)

var j = users.slice();
console.log(j)
users.push('jika')
console.log(users)



// for loop
for(var i=0; i<6; i++){
  console.log('hello world', i)
}

//while loop
var x=0
var names=['huda','jika','mahy','mika']
while(x<names.length){
  console.log('name:',names[x]);
  x++
}


var names=['huda','jika','mahy','mika']
for(var v=0; v<names.length;v++){
  console.log('my name :',names[v])
}

//do while
var names=['huda','jika','mahy','mika']
var c=0
do{
  console.log('iam ',names[c]);c++
}
while(c<names.length)

var f=0;
var word='hello world';
do{
  console.log(word,f);f++
}
while(f<9)


//continue& break
var user =['huda', 'rahma','rabab']
for(var i=0 ;i<user.length; i++){
  if(i===2){
    break
  }console.log(user[i])
}


var user =['huda', 'rahma','rabab','sara']
for(var i=0 ;i<user.length; i++){
  if(i===1){
    continue
  }console.log(user[i])
}


function huda(num1,num2) {
  console.log(num1 + num2)
}
huda(3,7)


function myFunction(u1,_u2) {
  var result= u1+_u2;
  return result
  
}
console.log(myFunction(Poish,john))










