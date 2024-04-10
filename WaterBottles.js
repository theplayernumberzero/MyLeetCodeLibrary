/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let bottle = 0;
    let drinkedBottles = 0;
    while(numBottles > 0){
        drinkedBottles += numBottles;
        bottle += numBottles % numExchange;
        numBottles = Math.floor(numBottles/numExchange);
        numBottles += Math.floor(bottle/numExchange);
        bottle -= Math.floor(bottle/numExchange) * numExchange;
    }
    return drinkedBottles;
};