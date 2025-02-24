namespace InfiniteSilliness;

public interface IFightBehaviour
{
    void Fight();
}

internal class WarriorFightBehaviour : IFightBehaviour
{
    public void Fight()
    {
        Console.WriteLine("Warrior fight");
    }
}
