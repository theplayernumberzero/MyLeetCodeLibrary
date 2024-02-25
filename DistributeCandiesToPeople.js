/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let i;
    let count=1;
    let number = new Array(num_people).fill(0);
    while(candies>0){
        for(i=0;i<num_people;i++){
            if(candies==0){
                return number; 
            }
            else if(candies <= count && number[i] == 0){
                number[i] = candies;
                return number; 
            }
            else if(candies <= count && number[i]>=1){
                number[i] += candies;
                return number; 
            }
            else if(number[i]>=1){
                number[i] += count;
                candies -= count;
                count++;
                continue;
            }
            number[i] = count;
            candies -= count;
            count++;
        }
    }
};