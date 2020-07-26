/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-26 20:06:15
 * @LastEditTime: 2020-07-26 20:06:15
 */ 
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length <= 1) return nums.length
    var sum = 1,max = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < nums[i+1]) {
            ++sum
        } else {
            if(sum > max) {
                max = sum
            }
            sum = 1
        }
    }
    return max
};