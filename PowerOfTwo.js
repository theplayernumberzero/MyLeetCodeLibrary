/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1){
        return true;
    }
    let i;
    for(i=2;i<=n;i=i*2){
        if(i==n){
            return true;
        }
    }
    return false;
};