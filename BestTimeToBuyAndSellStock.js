//Time Limit Exceeds
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0;
    let min;
    for(let i=0;i<prices.length-1;i++){
        min = prices[i];
        for(let k=i;k<prices.length-1;k++){
            if(max < (prices[k+1] - min)){
            max = (prices[k+1] - min);
            }
        }
    }
    return max;
};

//Solution 2
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }
    return max;
}