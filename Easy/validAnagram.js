/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map()
    let i = 0, j = 0
    
    if(s.length != t.length)
        return false
    
    while(i < s.length){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1)
        }
        else{
            map.set(s[i], 1)
        }
        i++
    } 

    
    while(j < t.length){
        if(!map.has(t[j])){
            return false
        }        
        
        if(map.has(t[j])){
            map.set(t[j], map.get(t[j]) - 1)

            if(map.get(t[j]) == 0)
                map.delete(t[j])
        }
        j++
    }
    
    return true
};