import { SkillNode } from "./skillNode";

export default class RoleBasedSubjectManager {
  constructor(private readonly skillNodeMap: Map<string, SkillNode>) {}

  public getAllUnlearntSubjectsForRole(role: string): string[] {
    return Array.from(this.skillNodeMap.entries())
      .filter(([_, value]) => !value.isLearnt)
      .filter(([_, value]) => value.associatedJobRoles.includes(role))
      .map(([key]) => key);
  }

  public getAllLearntSubjectsForRole(role: string): string[] {
    return Array.from(this.skillNodeMap.entries())
      .filter(([_, value]) => value.isLearnt)
      .filter(([_, value]) => value.associatedJobRoles.includes(role))
      .map(([key]) => key);
  }
}
