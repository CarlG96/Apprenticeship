namespace InfiniteSilliness;

public abstract class Character
{
    private protected IWeaponBehaviour _weaponBehaviour;
    private protected ISocialBehaviour _socialBehaviour;
    private protected Element _element;

    protected void SetFightBehaviour(IWeaponBehaviour weaponBehaviour)
    {
        _weaponBehaviour = weaponBehaviour;
    }
    protected void SetSocialBehaviour(ISocialBehaviour socialBehaviour)
    {
        _socialBehaviour = socialBehaviour;
    }
    public void Fight()
    {
        _weaponBehaviour.Fight();
    }

    public void Social()
    {
        _socialBehaviour.Socialise();
    }
}

public class Warrior : Character
{
    public Warrior(Element element)
    {
        SetFightBehaviour(new SwordBehaviour());
        SetSocialBehaviour(new AngryBehaviour());
        _element = element;
    }
}

public class Knight : Character
{
    public Knight(Element element)
    {
        SetFightBehaviour(new SwordBehaviour());
        SetSocialBehaviour(new RegalBehaviour());
        _element = element;
    }

}


