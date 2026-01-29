import { SkillNode } from "./skillNode";

export default class PrereqSubjectManager {
  constructor(private readonly skillNodeMap: Map<string, SkillNode>) {}

  public getUnlearntPrereqSubjectsForSubject(
    skillNodeSubject: string
  ): string[] {
    // Return nothing if the subject doesn't exist in the map
    if (!this.skillNodeMap.get(skillNodeSubject)) {
      return [];
    }

    // Get some values to kick off the recursion initially
    const currentSkillNode = this.skillNodeMap.get(skillNodeSubject);
    const unlearntPrereqSubjects: string[] =
      this.extractUnlearntPrereqSubjectsForSubject(currentSkillNode);

    // Kick off the recursive function
    const allUnlearntPrereqs = this.collectUnlearntPrereqSubjectsForSubject(
      unlearntPrereqSubjects
    );

    /* Set the returned array to remove values that are duplicate
               as there could be on some types of graph with differing
               levels */
    return [...new Set(allUnlearntPrereqs)];
  }

  private extractUnlearntPrereqSubjectsForSubject(
    currentSkillNode: SkillNode
  ): string[] {
    const unlearntPrereqSubjects: string[] = [];
    for (let i = 0; i < currentSkillNode.prereqs.length; i++) {
      const skillNodeToCheck = this.skillNodeMap.get(
        currentSkillNode.prereqs[i]
      );
      if (skillNodeToCheck.isLearnt === false) {
        unlearntPrereqSubjects.push(currentSkillNode.prereqs[i]);
      }
    }
    return unlearntPrereqSubjects;
  }

  private collectUnlearntPrereqSubjectsForSubject(
    unlearntPrereqSubjects: string[]
  ): string[] {
    // Base case
    if (unlearntPrereqSubjects.length === 0) {
      return [];
    }

    // Loop through this depth of unlearnt node
    const newUnlearntPrereqs: string[] = [];
    for (let i = 0; i < unlearntPrereqSubjects.length; i++) {
      const nextDepthPrereqs = this.skillNodeMap.get(
        unlearntPrereqSubjects[i]
      ).prereqs;
      for (let j = 0; j < nextDepthPrereqs.length; j++) {
        const skillNodeToCheck = this.skillNodeMap.get(nextDepthPrereqs[j]);
        if (skillNodeToCheck.isLearnt === false) {
          newUnlearntPrereqs.push(nextDepthPrereqs[j]);
        }
      }
    }

    // Recurse
    return unlearntPrereqSubjects.concat(
      this.collectUnlearntPrereqSubjectsForSubject(newUnlearntPrereqs)
    );
  }
}
