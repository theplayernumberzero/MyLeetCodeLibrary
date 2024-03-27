/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sumOfDivisible = 0;
    for(let i=1;i<=n;i++){
        if(i%m==0){
            sumOfDivisible += i;
        }
    }
    return (n*(n+1))/2 - 2*sumOfDivisible;
};