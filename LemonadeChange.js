/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five_Bills=0;
    let ten_Bills=0;

    for(let i=0;i<bills.length;i++){
        if(bills[i]==5){
          five_Bills++;
        }
        else if(bills[i]==10){
          if(five_Bills>0){
              five_Bills--;
              ten_Bills++;
          }else{
              return false;
          }
        }else{
            if(five_Bills > 0 && ten_Bills > 0){
                five_Bills--;
                ten_Bills--;
            }
            else if(five_Bills >= 3){
                five_Bills=five_Bills-3
            }else{
                return false;
            }
        }
    }
    return true;
};