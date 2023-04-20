// complete the given function

function palindrome(str){

let s1 = str.split(' ').join('')
let s2 = s1.split('').reverse().join('');

 return true ? s1 == s2 : false;
}
module.exports = palindrome
