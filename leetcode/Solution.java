import java.util.*;
class Sol {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] { i, j }; 
                }
            }
        }
        return new int[] {}; 
    }
}
public class Solution{
    public static void main(String[] args){
        System.out.println("enter the array size");
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int[] nums = new int[sc.nextInt()];
        System.out.print("Enter numbers: ");
        for (int i = 0; i < nums.length; i++) nums[i] = sc.nextInt();
        
        System.out.print("Enter target: ");
        int target = sc.nextInt();
        
        int[] res = new Sol().twoSum(nums, target);
        System.out.println(Arrays.toString(res));

    }
}