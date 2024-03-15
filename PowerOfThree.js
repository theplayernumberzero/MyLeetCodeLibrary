/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==1){
        return true;
    }
    let answer=2;
    while(answer>1){
        answer=n/3;
        n/=3;
    }
    if(answer==1){
        return true;
    }
    else{
        return false;
    }
};