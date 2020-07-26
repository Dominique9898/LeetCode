/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-25 15:46:52
 * @LastEditTime: 2020-07-25 16:22:43
 */ 

/*  一个数组中中间部分都是0，前半部分全是负数，后半部分都是正数，要求时间复杂度尽量低的情况下，查找最后一个负数和第一个正数。
    题目中描述的数组，求解结果是与0比较的，可以看做是有序的，使用二分查找，时间复杂度可以达到log(n)
    要求时间复杂度为 O(logN)。例子：数组 [-1，-2，0，0，0，0，4，5] 最后一个负数出现的位置为 2，第一个正数出现的位置为 7。
    用二分 ，复杂度 O（logn）
*/
var arr = [-1, -2, 0, 0, 0, 0, 4, 5]
function BinSearch (arr, flag) {
    let = len = arr.length, left = 0, right = len - 1
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if( arr[mid] == 0) {
            if(flag) {
                right = mid - 1
                if(arr[right] < 0) return right
            } else {
                left = mid + 1
                if (arr[left] > 0) return left
            }
        } else if ( arr[mid] > 0) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }   
    return 0
}
console.log([BinSearch(arr, true) + 1, BinSearch(arr, false)+1]);