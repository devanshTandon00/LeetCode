//brute force
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let container = 0

    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            const x = j - i
            if(height[j] < height[i])
                container = height[j] * x
            else
                container = height[i] * x

            max = Math.max(max, container)
        }
        console.log(max)
    }

    return max
};
