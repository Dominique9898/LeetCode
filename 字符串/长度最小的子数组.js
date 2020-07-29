/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-28 13:14:39
 * @LastEditTime: 2020-07-28 13:53:45
 */ 
// 滑动窗口
var minSubArrayLen = function (s, nums) {
    if (!nums) return 0
    var sum = 0, left = 0, right = 0, min = Number.MAX_VALUE
    for(right = 0; right < nums.length; right ++) {
        sum = sum + nums[right]
        while( sum >= s) {
            sum = sum - nums[left++]
            min = Math.min(right - left + 1, min)
            console.log(sum, min)
        }
    }
    return min < Number.MAX_VALUE ? min : 0
};
