using System;

namespace Quicksort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Quicksort is a divide and conquer algorithm
            // You have to pick a pivot point on the array, and then sort out anything larger than or smaller than the pivot
            List<int> arr = Enumerable.Range(1, 10000).ToList();
            Random r = new Random();
            arr = arr.OrderBy(x => r.Next()).ToList();
            foreach(int a in arr)
            {
                Console.WriteLine(a);
            }
            List<int> result = QuickSort(arr);
            foreach(int a in result)
            {
                Console.WriteLine(a);
            }
        }

        public static List<int> QuickSort(List<int> arrayForSorting)
        {
            if (arrayForSorting.Count < 2)
            {
                return arrayForSorting;
            }
            else
            {
                int pivot = arrayForSorting[0];
                List<int> less = new();
                List<int> grtr = new();
                for(int i = 1; i < arrayForSorting.Count; i++)
                {
                    if (arrayForSorting[i] > pivot)
                    {
                        grtr.Add(arrayForSorting[i]);
                    }
                    else
                    {
                        less.Add(arrayForSorting[i]);
                    }
                }
                return [..QuickSort(less), pivot, ..QuickSort(grtr)];
            }

        }
    }
}
