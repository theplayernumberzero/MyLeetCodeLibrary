/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let money = 0;

    for (let i = 0; i < n; i++) {
        money += Math.floor(i / 7) + 1 + (i % 7);
    }

    return money;    
};