import java.util.Scanner;

class RogueValues {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int highestValue = 0;
        int lowestValue = 0;
        boolean valueReached = false;
        boolean firstRun = true;
        while (!valueReached) {
            System.out.println("Please input a value:");
            int val = input.nextInt();
            if (firstRun) {
                highestValue = val;
                lowestValue = val;
                firstRun = false;
            }
            if ((val == -1)) {
                valueReached = true;
                break;
            }
            if (val > highestValue) {
                highestValue = val;
            }
            if (val < lowestValue) {
                lowestValue = val;
            }
        }
        System.out.println(lowestValue);
        System.out.println(highestValue);
    }
}
