import java.util.Scanner;

class Secret {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        boolean correctPassword = false;
        while (!correctPassword) {
            System.out.println("Please write the password:");
            String password = input.nextLine();
            if (!password.equalsIgnoreCase("Secret")) {
                correctPassword = true;
            }
        }
        System.out.println("You're in!");
    }
}
