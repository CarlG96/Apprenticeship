"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubjectStatusManager {
    constructor(skillNodeMap) {
        this.skillNodeMap = skillNodeMap;
    }
    getAvailablePostreqSubjects() {
        // Find all the unlearnt subjects in the skill node map
        const unlearntSubjects = this.getAllUnlearntSubjects();
        // Find all the unlearnt subjects in the skill node maps with all prereqs learnt
        const availablePostreqSubjects = [];
        for (let i = 0; i < unlearntSubjects.length; i++) {
            const currentPrereqs = this.skillNodeMap.get(unlearntSubjects[i]).prereqs;
            const currentLearntPrereqs = currentPrereqs.filter((cup) => this.skillNodeMap.get(cup).isLearnt);
            // Will only pass this condition if all the prereqs are learnt
            if (currentLearntPrereqs.length === currentPrereqs.length) {
                availablePostreqSubjects.push(unlearntSubjects[i]);
            }
        }
        return availablePostreqSubjects;
    }
    getAllUnlearntSubjects() {
        return Array.from(this.skillNodeMap.entries())
            .filter(([_, value]) => !value.isLearnt)
            .map(([key]) => key);
    }
    getAllLearntSubjects() {
        return Array.from(this.skillNodeMap.entries())
            .filter(([_, value]) => value.isLearnt)
            .map(([key]) => key);
    }
}
exports.default = SubjectStatusManager;
