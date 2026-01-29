print("Hello Infinite Pie")

jobs = ["Guardian", "Pugilist", "Elementalist",
        "Rogue", "Bishop", "Scholar",
        "Battlemage",
        "Chronomancer", "Conjurer", "Barbarian", "Spellblade", "Mime", "Tamer",
        "Nomad", "Assassin", "Hunter", "Minstrel", "Dragoon", "Dancer",
        "Swordmaster",
        "Alchemist", "Gunner", "Champion", "Seer", "Warlock"]


class JobClass():
    def __init__(self):
        self.strength_mod = 1.0,
        self.endurance_mod = 1.0,
        self.agility_mod = 1.0,
        self.magic_mod = 1.0,
        self.will_mod = 1.0,
        self.luck_mod = 1.0
        

class Guardian(JobClass):
    def __init__(self, name, personality):
        super().__init__()
        