namespace Selection_Sort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Arrays are contiguous memory, but adding to them can require moving the entire the array in memory
            // Reading for arrays is O(1), but insertion and deletion is O(n)
            // Arrays have random access, you can jump straight to an element
            // The nodes of linked lists can be anywhere in memory, and are linked with pointers
            // Reading for linked lists is O(n), but insertion and deletion is O(1)
            // Linked lists have sequential access, you must go through them in order to reach an element
            List<int> sortedArray = SelectionSort(new List<int>()
            {
                1,18,23, 2, 6, 7, 3, 1, 1, 9
            });
            foreach(int num in sortedArray)
            {
                Console.WriteLine(num);
            }
        }

        public static int FindSmallest(List<int> nums)
        {
            int smallest = nums[0];
            int smallest_index = 0;
            for(int i = 1; i < nums.Count; i++)
            {
                if (nums[i] < smallest)
                {
                    smallest = nums[i];
                    smallest_index = i;
                }
            }
            return smallest_index;
        }

        public static List<int> SelectionSort(List<int> nums)
        {
            List<int> newArr = [];
            while (nums.Count > 0)
            {
                int smallestIndex = FindSmallest(nums);
                newArr.Add(nums[smallestIndex]);
                nums.RemoveAt(smallestIndex);
            }
            return newArr;
        }
    }
}
