import java.util.Scanner;

class Arr {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] nums = new int[10];
        for (int num : nums) {
            System.out.println("Please input a number:");
            num = input.nextInt();
        }
        for (int i = (nums.length - 1); i >= 0; i--) {
            System.out.println(nums[i]);
        }
    }
}
