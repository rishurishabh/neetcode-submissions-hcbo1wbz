class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // nums.sort((a,b) => a-b);

        // for(let i = 1; i < nums.length; i++) {
        //     if(nums[i] === nums[i-1]) {
        //         return true;
        //     }
        // }

        // let set = new Set();

        // for(let num of nums) {
        //     if(set.has(num)) {
        //         return true;
        //     }
        //     set.add(num);
        // }
        // return false;

        return new Set(nums).size < nums.length;
    }
}
