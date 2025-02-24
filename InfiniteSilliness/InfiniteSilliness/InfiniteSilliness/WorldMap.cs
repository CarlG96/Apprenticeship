namespace InfiniteSilliness;

internal class WorldMap
{
    private List<MapNode> _mapNodes;

    internal WorldMap()
    {

    }
}

internal record MapNode(string Name, int Position, Nation Nation, Element Element);

internal record Position(int X, int Y);
