/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let value;
    let k;
    let i;
    for(i=0;i<=n;i++){
        value=0;
        for(k=0;k<n;k++){
            if(i != nums[k]){
                value++;
            }
            if(value==n){
                return i;
            }
        }
    }
};