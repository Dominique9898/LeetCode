/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-19 17:00:09
 * @LastEditTime: 2020-07-19 23:05:21
 */ 
var num1 = "2"
var num2 = "2"
var multiply = function(num1, num2) {
    let l1 = num1.length,l2 = num2.length
    let res = new Array(l1 + l2 - 1).fill(0);
    for( let i = 0; i < num1.length + num2.length; i++) res[i] = 0
    for ( let i = num1.length - 1; i >= 0; i--) {
        for ( let j = num2.length -1; j >= 0; j--) {
            let product = ( num1[i] - '0' ) * ( num2[j] - '0' )
            res[i + j + 1] += product
        }
    }
    console.log(res)
    let cot = 0
    for(let i = res.length-1; i>=0;i--) {
        var tmp = res[i]
        res[i] =  ( tmp + cot ) % 10
        cot = Math.floor( (tmp + cot)  / 10)
    }
    return res.join('').trim()
};
multiply(num1,num2)