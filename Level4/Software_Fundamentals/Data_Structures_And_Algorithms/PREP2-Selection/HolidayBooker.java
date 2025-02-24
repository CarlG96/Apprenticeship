import java.util.List;
import java.util.Scanner;

class HolidayBooker {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Please input a duration of stay (either 2, 7 or 14):");
        Byte nightsStaying = input.nextByte();
        System.out.println("Please input the number of guests at the party:");
        Byte numberOfGuests = input.nextByte();
        System.out.println("What type of board do you want? (full, half or self)");
        String board = input.next();

        List<Byte> stayBytes = List.of((byte) 2, (byte) 7, (byte) 14);
        List<String> boards = List.of("full", "half", "self");

        if (!stayBytes.contains(nightsStaying)) {
            System.out.println("You didn't input a valid stay duration!");
        } else if (numberOfGuests > 10 || numberOfGuests < 1) {
            System.out.println("You didn't input a reasonable amount of guests!");
        } else if (!boards.contains(board)) {
            System.out.println("You didn't input a correct board type!");
        } else {
            System.out.println("Valid details entered - booking may proceed.");
        }

        input.close();
    }
}
