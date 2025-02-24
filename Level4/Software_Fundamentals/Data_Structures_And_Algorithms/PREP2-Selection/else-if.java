import java.util.Scanner;

class elsif {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int value = input.nextInt();

        if (value < 0) {
            System.out.println("Value is less than 0");
        } else if (value > 0) {
            System.out.println("Value is greater than 0");
        } else {
            System.out.println("The value is 0");
        }
    }
}
