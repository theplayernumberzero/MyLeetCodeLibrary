/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let array = [];
    let count = 0;
    let num;
    for(let i=0;i<nums.length;i++){
        num = nums[i];
        for(let k=0;k<nums.length;k++){
            if(nums[k] < num){
                count++;
            }
        }
        array[i] = count;
        count = 0;
    }
    return array;
};