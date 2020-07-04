public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {

        int k = 0;
        Set<Integer> set = new HashSet<>();

        for(int i: nums1)
            set.add(i);

        Set<Integer> set2 = new HashSet<>();

        for(int j: nums2){
            if(set.contains(j)){
                set2.add(j);
            }
        }

        int[] arr= new int[set2.size()];

        for(int x: set2){
            arr[k++] = x;
        }

       return arr;
    }
}
