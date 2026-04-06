class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = new Array(nums.length + 1).fill(0);
        
        for(let i = 1; i < nums.length+1; i++) {
            this.prefix[i] = this.prefix[i - 1] + nums[i-1];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefix[right+1] - this.prefix[left];
    }
}
