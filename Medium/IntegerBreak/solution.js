/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {
    if(n == 2)
        return 1
    
    if(n == 3)
        return 2
     
    const quotient = parseInt(n / 3)
    let answer = 0
    
    switch(n % 3){
        case 0:
            answer = Math.pow(3, quotient)
            break
        case 1:
            answer = Math.pow(3, (quotient - 1)) * 4 
            break
        case 2:
            answer = Math.pow(3, quotient) * 2
            break
    }
    
    return answer
};