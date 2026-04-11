class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const getSquare = (num) => {
            let ans = 0;
            while(num > 0) {
                let rem = num % 10;
                ans  += rem * rem;
                num = Math.floor(num / 10 );
            }
            return ans;
        }

        let slow = n, fast = n;
        do {
            slow = getSquare(slow);
            fast = getSquare(getSquare(fast));
        }while(slow !== fast);

        if(slow === 1) {
            return true;
        }
        return false
    }

    
}
