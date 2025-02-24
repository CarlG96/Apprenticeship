namespace InfiniteSilliness;

public interface ISocialBehaviour
{
    void Socialise();
}

internal class AngryBehaviour : ISocialBehaviour
{
    public void Socialise()
    {
        Console.WriteLine("RAAAH!!!");
    }
}

internal class RegalBehaviour : ISocialBehaviour
{
    public void Socialise()
    {
        Console.WriteLine("Hello There!");
    }
}
