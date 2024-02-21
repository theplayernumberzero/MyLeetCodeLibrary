/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let temp;
    let element;
    let k;
    let number = [];
    let tempNumber = [];
    let control=0;
    for(let i=left;i<=right;i++){
        temp = i;
        if(temp==0){continue;}
        while(temp!=0){
            element = temp%10;
            temp = temp/10;
            temp = Math.floor(temp);
            tempNumber.push(element);
            console.log(element);
        }
        for(k=0;k<tempNumber.length;k++){
            if(i % tempNumber[k] == 0){
                control++;
            }
            if(control == tempNumber.length)
            {
            number.push(i);
            }
        }
        tempNumber=[];
        control=0;
    }
    return number;
};