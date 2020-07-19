class Solution {
    public int dietPlanPerformance(int[] calories, int k, int lower, int upper) {
        int sum = 0;
        int count = 0;

        for(int i = 0; i < k; i++){
            sum += calories[i];
        }

        count += calc(lower, upper, sum);

        for(int i = k; i < calories.length; i++){
            sum =  sum - calories[i - k] + calories[i];
            count += calc(lower, upper, sum);
        }

        return count;
    }

    public int calc(int lower, int upper, int sum){
        int count = 0;
        if(lower <= sum && sum <= upper){
            count = count;
        }
        else if(sum < lower){
            count -= 1;
        }
        else{
            count += 1;
        }

        return count;
    }
}
