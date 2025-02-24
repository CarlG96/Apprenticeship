namespace InfiniteSilliness;

public interface IWeaponBehaviour
{
    void Fight();
}

internal class SwordBehaviour : IWeaponBehaviour
{
    public void Fight()
    {
        Console.WriteLine("Swing sword");
    }
}
