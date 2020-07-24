/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-23 10:47:57
 * @LastEditTime: 2020-07-23 11:11:43
 */ 
var threeSum = function(nums) {
    if (nums.length < 3 || nums == null) return []
    var left, right, res = [], target 
    nums.sort((a, b) => a - b) 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        left = i + 1
        right = nums.length - 1
        if(nums[i] == nums[i - 1]) {
            continue
        }
        target = nums[i]
        while(left < right) {
            if (target + nums[left] + nums[right] == 0) res.push([target, nums[left], nums[right]])
            else if (target + nums[left] + nums[right] > 0) {
                while(nums[right] == nums[right - 1])right--
            } else {
                while(nums[left] == nums[left + 1])left++
            }
        }
    }
    return res
};
arr = [-1,0,1,2,-1,-4]
console.log(threeSum(arr));
