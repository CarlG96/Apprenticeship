import java.util.Scanner;

class IfDriveOrVote {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("How old are you?");
        int age = input.nextInt();

        if (age >= 17) {
            System.out.println("You are old enough to drive");
        } else {
            System.out.println("You aren't old enough to drive");
        }
        if (age >= 18) {
            System.out.println("You are old enough to vote");
        } else {
            System.out.println("You aren't old enough to vote");
        }
    }

}
