// 176 out of 210 test cases passed
class Solution {
    public int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        int counter = 0;

        if(prices.length == 1){
            return 0;
        }

        if(prices.length == 2){
            if(prices[0] < prices[1])
                return prices[1] - prices[0];
            else
                return 0;
        }

        if(prices.length >= 3){
            for(int i = 0; i < prices.length - 1; i++){
                if(prices[i] < min){
                    min = prices[i];
                    counter = i;
                }
            }
        }

        for(int i = counter; i < prices.length; i++){
            if(prices[i] > max){
                    max = prices[i];
            }
        }

        return max - min;
    }
}
