/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let i;
    let value;
    let array = [];
    for(i=0;i<n;i++){
        if(n%2!=0){
            if(Math.floor(n/2)==i){
                array[i] = 0;
                continue;
            }
            if(Math.floor(n/2)<i){
                array[i] = -array[n-i-1];
                continue;
            }
            value = i+1;
            array[i] = value;
        }
        else{
           if(Math.floor(n/2)<=i){
                array[i] = -array[n-i-1];
                continue;
            }
            value = i+1;
            array[i] = value; 
        }
    }
    return array;
};