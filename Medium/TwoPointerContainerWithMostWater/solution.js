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


// optimized two pointer Solution
// O(n) runtime and O(1) space
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let container = 0

    let left = 0
    let right = height.length - 1

    while(left < right){
        const x = right - left
        container = x * Math.min(height[left], height[right])

        max = Math.max(container, max)

        if(height[left] < height[right])
            left++
        else
            right--
    }

    return max
};
