//challenge 1
let numbers=[2,4,6,8,9,33,24];
let max= numbers[0];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>=max){
         max=numbers[i];
    }
    
}
console.log(max)
//or

let number=[10,23,40,11];
console.log(Math.max(...number))

//or
function findLargeNum(arr){
    let largestNum=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largestNum){
            largestNum=arr[i];
        }
    }
    return largestNum;
}
console.log(findLargeNum([10,33,88,13]));
//////////////////////////////////////////
//challenge 2

function myfunction(){
let number=[10,23,40,11];

    return number[0]
}
console.log(myfunction())
number.push('huda','basma')
console.log(number)
number.pop()
console.log(number)
number.shift()
console.log(number)
number.unshift(99)
console.log(number)
////////////////////////////////
//challenge3
function y(baseName){
    return function(num){
        return baseName+num;
    }
}
console.log(y(5)(13))
////////////////////////////
//challenge 4
function LargeLetter(word){
         return word.toUpperCase()
}
console.log(LargeLetter('hello world'))
//or
let a= 'hello world';
let b= a.toLowerCase();
console.log(b)
//////////////////////////////////
//challenge 5
function flatten(_arr1,_arr2){
        let x= _arr1.concat(_arr2);
        return x
}
console.log(flatten([1,2],[3,4]))