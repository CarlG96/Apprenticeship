using System.Collections;

namespace Hash_Tables
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // A hash function is a function where you put in a string and have a number returned
            // It needs to be consistent, you should always get the same result depending on input
            // Every string should map to a different number, the number represents the index of an array
            // Hash tables have an implementation in C# as dictionaries
            // Hash tables are constant time in the best case scenario, being an immediate lookup based on how quickly the hash function works
            // However, depending on how the hashing function handles collisions, it could geenrate linked lists, increasing it to a worst
            // case time of On, but in general it can be assumed the hash function resizes the array efficiently enough to be practically
            // constant time always

            // Collisions occur when two separate keys would map to a single index, the load factor is how much space of the already 
            // instantiated array is being used by the has function, so an array of 10 with 7 items would be 0.7. Generally, a 
            // hash table will resize to twice the array size and repopulate the array above 0.7 load factor

            Dictionary<string, int> dictionary = new Dictionary<string, int>();
            
        }
    }
}
