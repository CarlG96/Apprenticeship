Arrays are a contiguous set of memory

Reading from an array is O(1), this is because, with the index, the
program can get the exact memory location of the ref/ value

Searching from an array is O(n), as worst case scenario you have to go through every element

Insertion from an array is also O(n), as is deleting. This can be different depending on where the insertion and deletion is
carried out, and if the array needs to be resized, which can dramatically affect runtime. Shifting values is
another big thing.

2D arrays are arrays of arrays, in actual memory, they are blocks of arrays, but are thought of more easily
by visualising it in 2 dimenstions.
