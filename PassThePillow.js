/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let count=0;
    let i;
    let value=1;
    while(count!=time){
        for(i=2;i<=n;i++){
            if(count==time){
                return value;
            }
            value = i;
            count++;
        }
        for(i=n-1;i>=1;i--){
            if(count==time){
                return value;
            }
            value = i;
            count++;
            console.log(value);
        }
    }
    return value;
};