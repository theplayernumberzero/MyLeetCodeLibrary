/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let check = x;
    let temp=x;
    let reversed = 0;
    let i;
    let digit=0;
    if(x<0){
        return false;
    }
    while(temp>0){
        temp=Math.floor(temp/10);
        digit++;
        console.log(digit);
    }
    while(x>0){
        temp=x%10;
        for(i=digit-1;i>0;i--){
            temp*=10;
        }
        reversed+=temp;
        x=Math.floor(x/10);
        digit--;
    }
    if(reversed == check){
        return true;
    }
    else{
        return false;
    }
};