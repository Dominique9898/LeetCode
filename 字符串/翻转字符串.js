/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-20 19:39:08
 * @LastEditTime: 2020-07-21 13:13:00
 */ 
str = 'a good   example'
var reverseWords = function(s) {
    let arr = s.split(' ')
    let str = ''
    console.log(arr)
    for( let i = arr.length - 1; i >= 0; i--) {
        str = arr[i] == arr[i-1] && arr[i] == '' ? str: str + ' ' + arr[i]
    }
    return str;
};
console.log(reverseWords(str))