"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrereqSubjectManager {
    constructor(skillNodeMap) {
        this.skillNodeMap = skillNodeMap;
    }
    getUnlearntPrereqSubjectsForSubject(skillNodeSubject) {
        // Return nothing if the subject doesn't exist in the map
        if (!this.skillNodeMap.get(skillNodeSubject)) {
            return [];
        }
        // Get some values to kick off the recursion initially
        const currentSkillNode = this.skillNodeMap.get(skillNodeSubject);
        const unlearntPrereqSubjects = this.extractUnlearntPrereqSubjectsForSubject(currentSkillNode);
        // Kick off the recursive function
        const allUnlearntPrereqs = this.collectUnlearntPrereqSubjectsForSubject(unlearntPrereqSubjects);
        /* Set the returned array to remove values that are duplicate
                   as there could be on some types of graph with differing
                   levels */
        return [...new Set(allUnlearntPrereqs)];
    }
    extractUnlearntPrereqSubjectsForSubject(currentSkillNode) {
        const unlearntPrereqSubjects = [];
        for (let i = 0; i < currentSkillNode.prereqs.length; i++) {
            const skillNodeToCheck = this.skillNodeMap.get(currentSkillNode.prereqs[i]);
            if (skillNodeToCheck.isLearnt === false) {
                unlearntPrereqSubjects.push(currentSkillNode.prereqs[i]);
            }
        }
        return unlearntPrereqSubjects;
    }
    collectUnlearntPrereqSubjectsForSubject(unlearntPrereqSubjects) {
        // Base case
        if (unlearntPrereqSubjects.length === 0) {
            return [];
        }
        // Loop through this depth of unlearnt node
        const newUnlearntPrereqs = [];
        for (let i = 0; i < unlearntPrereqSubjects.length; i++) {
            const nextDepthPrereqs = this.skillNodeMap.get(unlearntPrereqSubjects[i]).prereqs;
            for (let j = 0; j < nextDepthPrereqs.length; j++) {
                const skillNodeToCheck = this.skillNodeMap.get(nextDepthPrereqs[j]);
                if (skillNodeToCheck.isLearnt === false) {
                    newUnlearntPrereqs.push(nextDepthPrereqs[j]);
                }
            }
        }
        // Recurse
        return unlearntPrereqSubjects.concat(this.collectUnlearntPrereqSubjectsForSubject(newUnlearntPrereqs));
    }
}
exports.default = PrereqSubjectManager;
