/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i;
    let staircase = 0;
    for(i=0;i<n;i++){
        if(staircase<n){
            staircase++;
            n = n - staircase;
        }
    }
    return staircase;
};
