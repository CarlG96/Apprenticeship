import java.util.ArrayList;
import java.util.Scanner;

class SumNegPos {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        ArrayList<Integer> nums = new ArrayList<Integer>();
        for(int i = 0; i < 10; i++){
            System.out.println("Please input a number: ");
            nums.add(input.nextInt());
        }
        int posNums = 0;
        int negNums = 0;
        for(Integer num : nums){
            if(num >= 0){
                posNums += num;
                continue;
            }
            negNums += num;
        }
        System.out.println("positive numbers:");
        System.out.println(posNums);
        System.out.println("negative numbers:");
        System.out.println(negNums);
    }
}
