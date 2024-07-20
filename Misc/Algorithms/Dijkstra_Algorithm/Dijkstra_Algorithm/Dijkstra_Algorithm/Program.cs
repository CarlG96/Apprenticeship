namespace Dijkstra_Algorithm
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Breadth first search finds you the path with the shortest number of edges in a graph
            // But if those graphs have weighted edges, the actually fastest time might be different depending on the weight of edges
            // You can use Dijkstra's Algorithm to find the path with the smallest weight
            // There are four steps to Dijkstra's Algorithm:
            // 1) Find the cheapest node. THis is the node you can get to in the least amount of time
            // 2) Check whether there's a cheaper path to the neighbours of this node. If so, update their costs.
            // 3) Repeat until you've done this for every node in the graph
            // 4) Calculate the final path
            // Dijkstra's Algorithm only works on graphs with no cycles and no negative edges

            
        }
    }
}
