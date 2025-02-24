import java.util.Scanner;

class TimesTable {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Which times table do you want to display?");
        int timesTable = input.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(i * timesTable);
        }
    }
}
