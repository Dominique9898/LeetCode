/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-19 23:54:24
 * @LastEditTime: 2020-07-19 23:57:07
 */ 
var str = "abbbaca"
var remove = function(str) {
    var flag = 0,start, end;
    for(start = 0, end = 1; start < str.length, end < str.length; start++, end++) {
        if(str[start] == str[end]) {
            flag = 1
            while(str[start] == str[end]) {
                end++
            }
            break
        }
    }
    if(flag) {
                // console.log(str,start)
        var str = str.substr(0,start) + str.substr(end)
                // console.log(str)
        return remove(str)
    }
    return str
}
console.log(remove(str))