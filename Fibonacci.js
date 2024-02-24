/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let number1=0;
    let number2=1;
    let tmp;
    if(n==0){
        return number1;
    }else if(n==1){
        return number2;
    }
    else{
        for(let i=2;i<=n;i++){
            tmp = number1+number2;
            number2=tmp;
            number1=number2-number1;
        }
    }
    return number2;
};