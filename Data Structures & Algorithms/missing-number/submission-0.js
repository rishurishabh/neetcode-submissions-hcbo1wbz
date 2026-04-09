class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let i = 0;
        while(i < nums.length) {
            const correct = nums[i];
            if(nums[i] < nums.length && nums[i] !== nums[correct]) {
                const temp = nums[i];
                nums[i] = nums[correct];
                nums[correct] = temp;
            }else {
                i++;
            }
        }

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== i) {
                return i;
            }
        }
        return nums.length;
    }
}
