class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0, r = nums.length;

        while(l<=r) {
            const mid = Math.floor(l + (r - l) / 2);
            if(nums[mid] < target) {
                l = mid + 1;
            }else {
                r = mid - 1;
            }
        }
        return l;
    }
}
