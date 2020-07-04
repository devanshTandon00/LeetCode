/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0;
    const n = s.length;
    let count = 0;
    let set = new Set();

    // Using sliding windows technique to solve this problem using HashSet
    // difference between i and j will be the length of substring
    while(i < n && j < n){
        if(!set.has(s.charAt(j))){
            set.add(s.charAt(j++));
            count = Math.max(count, j - i);
        }
        else{
            set.delete(s.charAt(i++));
        }
    }

    return count;
};
