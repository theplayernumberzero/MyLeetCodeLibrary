/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    let array = new Array(children).fill(0);
    let i;
    let amount = money;
    let count = 0;
    for(i=0;i<children;i++){
        if(amount==0){
            return -1;
        }
        array[i]++;
        amount--;
    }
    for(i=0;i<children;i++){
        while(array[i]<8 && amount>0){
            array[i]++;
            amount--;
            console.log(amount);
            console.log(array[i]);
        }
    }
    for(i=0;i<children;i++){
        if(i==0 && array[i]==4){
            array[i]--;
            array[i+1]++;
        }else if(i==children-1 && array[i]==4){
            array[i]--;
            array[i-1]++;
        }
    }
    while(amount>0){
        array[0]++;
        amount--;
    }
    for(i=0;i<children;i++){
        if(array[i]==8){
            count++;
        }
        console.log(array[i]);
    }
    return count;
};