/******************
 * YOUR CODE HERE *
 ******************/
function xify(str){
 let answer = ""
 for(let char of str){
  answer += "x"
 } return answer
}

function yellingChars(str){
  let answer = ""
  for(let char of str){
   answer += char + "!"
  } return answer 
 }

 function indexedChars(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    result += i + str[i]
  }
  return result
}

function numberedChars(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    answer += "(" + (i + 1) + ")" + str[i]
  }
  return answer
}


function exclaim(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === "?" || char === ".") {
      char = "!";
    }
    answer += char
  }
  return answer
}

function repeatIt(str, n){
  let result = ""
  for (let i = 0; i < n; i++){
    result += str
  }
  return result
}

function truncate(str){
  if (str.length <= 18){
    return str
     }else{
    return str.substring(0, 15) + "..."
  }
}

function emailify(str){
  str = str.toLowerCase();
  let space = str.indexOf(" ");
  if (space === -1) {
    return str[0];
  }
  let emailAdd = "";
  for (let i = 0; i < space; i++) {
  if (i === 0) {
      emailAdd += str[i];
    }
  }
  for (let i = space; i < str.length; i++) {
  if (str[i] !== " ") {
      emailAdd += str[i];
    }
  }
  emailAdd += ".prsvr@gmail.com";
  return emailAdd;
}


function reverse(str) {
  let result = ""
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

function onlyVowels(str){
  const vowels = 'aeiouAEIOU';
  let result = '';
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])){
      result += str[i]
    }
  }
  return result
}

function crazyCase(str) {
  let result = "";
  let upper = false;
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (upper) {
      char = char.toUpperCase()
    } else {
      char = char.toLowerCase()
    }
    result += char
    upper = !upper
  }
  return result
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}

function titleCase(str) {
  let result = "";
  let space = true;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (space) {
      char = char.toUpperCase();
    } else {
      char = char.toLowerCase();
    }
    result += char;
    space = (char === " ");
  }
  return result;
}

function camelCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " ") {
      if (i > 0 && str[i - 1] === " ") {
        char = char.toUpperCase()
      } else {
        char = char.toLowerCase()
      }
      result += char
    }
  }
  return result
}

function crazyCase2ReturnOfCrazyCase(str) {
  let result = "";
  let upper = false;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " ") {
      if (upper) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      upper = !upper;
    }
    result += char;
  }
  return result;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
