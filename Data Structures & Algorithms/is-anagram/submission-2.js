class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        // t = t.split('');

        // for(let char of s) {
        //     const idx = t.indexOf(char);

        //     if(idx === -1) return false;
        //     t.splice(idx,1);
        // }
        // return true;

        
        // return s.split('').sort().join('') === t.split('').sort().join('');


        const obj = {};

        for(let char of s) {
            obj[char] = (obj[char] || 0) + 1;
        }

        for(let char of t) {
            if(!obj[char]) return false;

            obj[char]--;
        }
        return true;
    }
}
