// brute force
public class Solution {
    public int maxArea(int[] height) {
        int maxarea = 0;
        for (int i = 0; i < height.length; i++)
            for (int j = i + 1; j < height.length; j++)
                maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
        return maxarea;
    }
  }

// optimized two pointer Solution
// O(n) runtime and O(1) space
class Solution {
    public int maxArea(int[] height) {
        int i = 0, area = 0;
        int j = height.length - 1;

        while(i != j){
            if(height[i] < height[j]){
                area = Math.max(area, height[i] * (j - i));
                i++;
            }
            else{
                area = Math.max(area, height[j] * (j - i));
                j--;
            }
        }
        return area;
    }
}
