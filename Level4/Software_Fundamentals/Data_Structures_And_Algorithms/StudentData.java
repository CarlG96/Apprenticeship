import java.util.Scanner;

class StudentData {
    public static void main(String[] args) {
        int[][] arr = new int[5][3];
        String[] names = { "Age", "Height", "Shoe Size" };
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < arr.length; i++) {
            System.out.println("Please enter your age");
            int age = scanner.nextInt();
            System.out.println("Please enter your height");
            int height = scanner.nextInt();
            System.out.println("Please enter your shoe size");
            int shoeSize = scanner.nextInt();
            arr[i][0] = age;
            arr[i][1] = height;
            arr[i][2] = shoeSize;
        }

        for (int i = 0; i < arr.length; i++) {
            System.out.println("Person" + " " + (i + 1));
            for (int j = 0; j < arr[i].length; j++) {
                System.out.println(names[j] + " " + arr[i][j]);
            }
        }
    }
}
