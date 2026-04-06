class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0, h = x, ans = 0;

        while(l <= h) {
            const mid = Math.floor(l + (h - l) / 2);
            if(mid * mid <= x) {
                ans = mid;
                l = mid + 1;
            }else {
                h = mid - 1;
            }
        }
        return ans;
    }
}
