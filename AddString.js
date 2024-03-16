/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let number1 = BigInt(num1);
    console.log(number1);
    let number2 = BigInt(num2);
    console.log(number2);
    let answer = (number1+number2).toString();
    return answer;
};