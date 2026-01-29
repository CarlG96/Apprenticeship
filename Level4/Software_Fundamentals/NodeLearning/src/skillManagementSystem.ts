import SubjectStatusManager from "./subjectStatusManager";
import RoleBasedSubjectManager from "./roleBasedSubjectManager";
import PrereqSubjectManager from "./prereqSubjectManager";
import Logger from "./logger";
import { SkillNode } from "./skillNode";

export default class SkillManagementSystem {
  readonly subjectStatusManager: SubjectStatusManager;
  readonly roleBasedSubjectManager: RoleBasedSubjectManager;
  readonly prereqSubjectManager: PrereqSubjectManager;
  readonly logger: Logger;
  constructor(skillNodeMap: Map<string, SkillNode>) {
    this.subjectStatusManager = new SubjectStatusManager(skillNodeMap);
    this.roleBasedSubjectManager = new RoleBasedSubjectManager(skillNodeMap);
    this.prereqSubjectManager = new PrereqSubjectManager(skillNodeMap);
    this.logger = new Logger();
  }
}
