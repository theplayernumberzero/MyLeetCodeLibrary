/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let value = coordinates.split("");
    let array=["a","c","e","g"];
    for(let i=0;i<5;i++){
        if(value[0]==array[i]){
            if(value[1]%2==0){
                return true;
            }
            else{
                return false;
            }
        }
    }
    if(value[1]%2==0)
    {
        return false;
    }
    else{
        return true;
    }
};