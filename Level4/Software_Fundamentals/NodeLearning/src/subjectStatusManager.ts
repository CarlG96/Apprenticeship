import { SkillNode } from "./skillNode";

export default class SubjectStatusManager {
  constructor(private readonly skillNodeMap: Map<string, SkillNode>) {}

  public getAvailablePostreqSubjects(): string[] {
    // Find all the unlearnt subjects in the skill node map
    const unlearntSubjects = this.getAllUnlearntSubjects();

    // Find all the unlearnt subjects in the skill node maps with all prereqs learnt
    const availablePostreqSubjects: string[] = [];
    for (let i = 0; i < unlearntSubjects.length; i++) {
      const currentPrereqs = this.skillNodeMap.get(unlearntSubjects[i]).prereqs;
      const currentLearntPrereqs = currentPrereqs.filter(
        (cup) => this.skillNodeMap.get(cup).isLearnt
      );
      // Will only pass this condition if all the prereqs are learnt
      if (currentLearntPrereqs.length === currentPrereqs.length) {
        availablePostreqSubjects.push(unlearntSubjects[i]);
      }
    }
    return availablePostreqSubjects;
  }

  public getAllUnlearntSubjects(): string[] {
    return Array.from(this.skillNodeMap.entries())
      .filter(([_, value]) => !value.isLearnt)
      .map(([key]) => key);
  }

  public getAllLearntSubjects(): string[] {
    return Array.from(this.skillNodeMap.entries())
      .filter(([_, value]) => value.isLearnt)
      .map(([key]) => key);
  }
}
