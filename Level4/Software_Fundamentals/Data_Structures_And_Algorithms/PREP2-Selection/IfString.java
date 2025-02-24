import java.util.Scanner;

public class IfString {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter two names...");
        String name1 = input.next();
        String name2 = input.next();

        if (name1.equals(name2)) {
            System.out.printf("%s is the same as %s ", name1, name2);
        } else if (name1.equalsIgnoreCase(name2)) {
            System.out.printf("%s is the same if the case is ignored as %s", name1, name2);
        }
    }
}
