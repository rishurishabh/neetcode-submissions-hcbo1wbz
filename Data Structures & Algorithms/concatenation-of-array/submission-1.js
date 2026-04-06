class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // let len = nums.length;
        // let res = new Array(2*len);

        // for(let i = 0; i < len; i++) {
        //     res[i] = nums[i];
        //     res[len+i] = nums[i];
        // }
        // return res;

        return [...nums, ...nums];
    }
}
