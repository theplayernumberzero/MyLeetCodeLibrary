/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let i;
    let result = 0;
    for(i=0;i<k;i++){
        if(numOnes>0){
            result++;
            numOnes--;
        }
        else if(numZeros>0){
            numZeros--;
        }
        else{
            result--;
            numNegOnes--;
        }
    }
    return result;
};