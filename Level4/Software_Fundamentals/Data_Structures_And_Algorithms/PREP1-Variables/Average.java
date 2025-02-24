import java.util.Scanner;

public class Average {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter 3 integers:");
        int num1 = input.nextInt();
        int num2 = input.nextInt();
        int num3 = input.nextInt();
        double ave = num1 + num2 + num3 / 3;

        System.out.printf("\nThe average of %d, %d and %d is %.1f", num1, num2, num3, ave);
    }
}
