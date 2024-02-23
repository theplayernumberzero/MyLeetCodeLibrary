/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    let distance=0;
    let i=0;
    while(mainTank>0){
        distance+=10;
        mainTank--;
        i++;
        if(i%5==0){
            if(additionalTank>0){
                mainTank++;
                additionalTank--;
            }
        }
    }

return distance;
};