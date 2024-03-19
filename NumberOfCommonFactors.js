/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count = 0;
    let i;
    let small;
    if(a>b){
        small = b;
    }
    else{
        small = a;
    }
    for(i=1;i<=small;i++){
        if(a%i==0 && b%i==0){
            count++;
        }
    }
    return count;
};