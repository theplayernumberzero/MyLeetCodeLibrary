/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let value=0;
    let elementSum = 0;
    let digitalSum = 0;
    for(let i = 0; i < nums.length; i++){
        elementSum += nums[i];
        if(nums[i]>9){
            while(nums[i]>0){
                value += nums[i] % 10; 
                nums[i] = Math.floor(nums[i] / 10);
            }
            nums[i] = value;
        }
        digitalSum += nums[i];
        value = 0;
    }
    if(digitalSum>elementSum){
        return digitalSum-elementSum;
    }else{
        return elementSum-digitalSum;
    }
};