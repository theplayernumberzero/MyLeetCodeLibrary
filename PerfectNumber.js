 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum=0;
    for(let i=2;i<=num;i++){
        if(num%i==0){
            sum+=num/i;
        }
    }
    if(sum==num){return true;}
    return false;
};