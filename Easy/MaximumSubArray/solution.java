class Solution {

    public int maxSubArray(int[] nums) {

        int sum = 0;
        int max = Integer.MIN_VALUE;

        if(nums.length < 2)
            return nums[0];

        for(int i = 0; i < nums.length; i++){
            sum = sum + nums[i];

            if(max < sum)
                max = sum;

            if(sum < 0){
                sum = 0;
            }
        }

        return max;

    }

}
