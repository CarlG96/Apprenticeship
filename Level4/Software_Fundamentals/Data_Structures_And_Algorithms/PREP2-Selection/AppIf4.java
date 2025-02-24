import java.util.Scanner;

public class AppIf4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter your age");
        int age = input.nextInt();

        if (age >= 16 && age <= 66) {
            System.out.println("You are of working age");
        }

        else {
            System.out.println("You cannot work if you are " + age);
        }
    }
}
