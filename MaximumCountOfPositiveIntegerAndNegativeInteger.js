/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let positive = [];
    let negative = [];
    for(let i=0;i < nums.length;i++){
        if(nums[i]>0){
            positive.push(nums[i]);
        }else if(nums[i]<0){
            negative.push(nums[i]);
        }
    }
    if(positive.length > negative.length){
        return positive.length;
    }else if(positive.length <= negative.length){
        return negative.length;
    }else{
        return 0;
    }
};