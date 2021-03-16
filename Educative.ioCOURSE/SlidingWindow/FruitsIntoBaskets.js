/**
 * @param {number[]} tree
 * @return {number}
 */
 var totalFruit = function(tree) {
    let start = 0, maxCount = 0
    const map = new Map()
    
    for(let i = 0; i < tree.length; i++){
        map.set(tree[i], map.get(tree[i]) + 1 || 1)
        
        // size is only > 2 if third element is introduced
        while(map.size > 2){
            let elem = tree[start]
            map.set(elem, map.get(elem) - 1)
            
            if(map.get(elem) === 0)
                map.delete(elem)
            
            start++
        }
        
        console.log(map)
        if(map.size >= 1)
            maxCount = Math.max(maxCount, i - start + 1)
    }
    
    return maxCount
};