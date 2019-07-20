console.log('Here is : ', 'Reduce & Filter')

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hoooooooooooooob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
function avgAge(arr) {
  return (arr.reduce(function (total, elem) {
    return (total + elem['age'])
  }, 0)) / arr.length;
}

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(arr) {
  var length = 0;
  return arr.reduce(function (name, elem) {
    if ((elem.name.first + elem.name.last).length > length) {
      name = elem.name.first + + '' + elem.name.last;
      length = (elem.name.first + elem.name.last).length;
    }
    return name;
  }, '')
}

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(arr) {
  return arr.reduce((acc, elem) => {
    if (acc < elem) { acc = elem } return acc
  })
}

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(str, char) {
  str = str.split('');
  return str.reduce((acc, elem) => {
    if (char === elem) { acc++; }
    return acc;
  }, 0)
}

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(num1, num2) {

}





//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr) {
  return arr.filter(elem => elem % 2 === 0)
}

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr) {
  return arr.filter(elem => elem % 4 === 0);
}

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(arr, char) {
  // debugger
  return arr.filter((elem, i) => { 
    elem = elem.split('');
    elem.filter(elemin => elemin === char)    
    
    return arr.forEach()




    // for (let i = 0; i < elem.length; i++) {
    //   if (elem[i] === char) {
    //     return elem;
    //   }
    // }
  // })
})}








// function containChar(arr, char){
//   // debugger
//   var output;

//   for (let i = 0; i < arr.length; i++) {

//       arr[i].filter(elem => elem === char && true)
//       output +=varr[i];
//       return output;
//     })
//   }

//   return output; 
// }

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(arr) {
  return arr.filter((elem, i) => elem.length % 2 !== 0 && i % 2 === 0)
}

/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(arr, agein) {
  return arr.filter(elem => elem.age > agein)
}
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

function shorterThan(arr, num) {
  return arr.filter(elem => elem.length < num)
}


// if you finish the exercises review the material of the week and help your classmate
