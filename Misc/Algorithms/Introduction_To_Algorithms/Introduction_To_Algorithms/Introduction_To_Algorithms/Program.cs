namespace Introduction_To_Algorithms
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Logarithms 2 ** 3 = 8 so log2 8 = 3, basically how many times does the first number have
            // to be multiplied by itself to reach the second number
            // Binary search takes log 2 n steps to run in the worst case scenario
            // In Big 0 notation, log always means log2
            // Binary search also only works if your list is in a sorted order
            // Binary search runs in O(logn) time
            // Main Big O runtimes are:
            // O(log n), also known as log time, Example: Binary search
            // O(n), also known as linear time, Example: Simple search
            // O(nlogn): Fast sorting algorithm, like quicksort
            // O(n ** 2): Slow sorting algorithm, like selection sort
            // O(n!), really slow algorithm, like the travelling salesman)
            int[] array = Enumerable.Range(1, 10000000).ToArray();
            int? value = BinarySearch(array, new Random().Next(1, 10000000));
            Console.WriteLine($"Number of guesses are: {value}");
        }

        public static int? BinarySearch(int[] list, int number)
        {
            int low = 0;
            int high = list.Length - 1;
            int numOfGuesses = 1;
            while (low <= high)
            {
                int mid = (low + high) / 2;
                int guess = list[mid];
                if(guess == number)
                {
                    return numOfGuesses;
                }
                if(guess > number)
                {
                    high = mid - 1;
                    numOfGuesses += 1;
                }
                else
                {
                    low = mid + 1;
                    numOfGuesses += 1;
                }
            }
            return null;
        }
    }
}
