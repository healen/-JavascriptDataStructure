/** 数制转换算法， 基数取余* 11转2进制* 第一次 11%2 余 1 得 5* 第二次 5%2 余 1 得 2* 第三次 2%2 余 0 得 1* 第四次 1%2 余 1 得 0* 得出 11 的二进制为 1101* */const Stack = require("./Stack")/** 进制* */function mulBas(n, b) {  let s = new Stack()  do {    s.push(n % b)    n = Math.floor(n /= b)  } while (n > 0)  let num = ""  while (s.length() > 0) {    num += s.pop()  }  return num}/** 回文 正反都一样* racecar* */function isPalind(word) {  let s = new Stack()  for (let i = 0; i < word.length; ++i) {    s.push(word[i])  }  let rword = ""  while (s.length() > 0) {    rword += s.pop()  }  if (word === rword) {    return true  } else {    return false  }}function factorial(n) {  if (n === 0) {    return 1  } else {    return n * factorial(n - 1)  }}function fact(n) {  let s = new Stack()  do{    s.push(n--)  }while (n>1)  let mul = 1  while (s.length() > 0) {    mul *= s.pop()  }  return mul}//1，3，2，4，4，2，3function center(arr){  let temps = []  let n = 0  for(let i=0;i<arr.length;i++){    if(i===arr.length-1){      n++    }  }}console.log(fact(5))console.log(factorial(5))