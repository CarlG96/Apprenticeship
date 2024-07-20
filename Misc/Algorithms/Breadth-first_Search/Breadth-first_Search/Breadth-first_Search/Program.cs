using System.Collections;
using System.Collections.Generic;

namespace Breadth_first_Search
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Create the graph as a binary tree with three levels deep
            Node root = new Node(
                new Node(
                    new Node(null, null, 4), // Level 3
                    new Node(null, null, 5), // Level 3
                    2), // Level 2
                new Node(
                    new Node(null, null, 6), // Level 3
                    new Node(null, null, 7), // Level 3
                    3), // Level 2
                1); // Level 1 (root)

            List<Node> binaryTree = new List<Node>() { root };

            Queue<Node> queue = new Queue<Node>();
            queue.Enqueue(binaryTree[0]);
            while(queue.Count > 0)
            {
                Node? node = queue.Dequeue();
                Console.WriteLine(node.Value);
                if(node.LeftNode is not null)
                {
                    queue.Enqueue(node.LeftNode);
                }
                if(node.RightNode is not null)
                {
                    queue.Enqueue(node.RightNode);
                }
            }
        }
    }

    internal class Node
    {
        public Node? LeftNode { get; init; }
        public Node? RightNode { get; init; }
        public int Value { get; init; }

        public Node(Node? leftNode, Node? rightNode, int value)
        {
            LeftNode = leftNode;
            RightNode = rightNode;
            Value = value;
        }
    }
}
