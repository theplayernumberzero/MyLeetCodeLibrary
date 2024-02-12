/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let stringReturn = [];
    let i;
    for(i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            stringReturn[i-1] = "FizzBuzz";
            continue;
        }
        if(i%3==0){
            stringReturn[i-1] = "Fizz";
            continue;
        }
        if(i%5==0){
            stringReturn[i-1] = "Buzz";
            continue;
        }
        let value = i.toString();
        stringReturn[i-1] = value;
    }
    return stringReturn;
};
fizzBuzz(20);