
namespace Recursion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Recursive functions consist of the base case and the recursive case.
            // Base case is when the recursion stops
            // Recursive case calls the function again, with different arguments

            Factorial(100);
        }

        private static void Factorial(int v)
        {
            if (v == 1) Console.WriteLine(1);
            else
            {
                Console.WriteLine(v); 
                Factorial(v - 1);
            }
        }
    }
}
