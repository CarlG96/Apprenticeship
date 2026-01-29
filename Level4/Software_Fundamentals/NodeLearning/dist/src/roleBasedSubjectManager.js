"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoleBasedSubjectManager {
    constructor(skillNodeMap) {
        this.skillNodeMap = skillNodeMap;
    }
    getAllUnlearntSubjectsForRole(role) {
        return Array.from(this.skillNodeMap.entries())
            .filter(([_, value]) => !value.isLearnt)
            .filter(([_, value]) => value.associatedJobRoles.includes(role))
            .map(([key]) => key);
    }
    getAllLearntSubjectsForRole(role) {
        return Array.from(this.skillNodeMap.entries())
            .filter(([_, value]) => value.isLearnt)
            .filter(([_, value]) => value.associatedJobRoles.includes(role))
            .map(([key]) => key);
    }
}
exports.default = RoleBasedSubjectManager;
