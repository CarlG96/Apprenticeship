export interface SkillNode {
  isLearnt: boolean;
  prereqs: string[];
  postreqs: string[];
  associatedJobRoles: string[];
}
