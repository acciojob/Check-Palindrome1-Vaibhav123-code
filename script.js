// complete the given function

function palindrome(str){
let s = str.toLowerCase()
let s1 = s.split(' ').join('')
let s2 = s1.split('').reverse().join('');

 return true ? s1 == s2 : false;
}
module.exports = palindrome
