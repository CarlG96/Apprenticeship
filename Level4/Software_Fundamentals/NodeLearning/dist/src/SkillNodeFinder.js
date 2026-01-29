"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkillNodeFinder {
    constructor(skillNodeMap) {
        this.skillNodeMap = skillNodeMap;
    }
    findAllAvailablePostreqSubjects() {
        // Find all the unlearnt subjects in the skill node map
        const unlearntSubjects = this.getAllUnlearntSubjects();
        // Find all the unlearnt subjects in the skill node maps with all prereqs learnt
        return this.getAllAvailablePostreqSubjects(unlearntSubjects);
    }
    getAllUnlearntSubjects() {
        return Array.from(this.skillNodeMap.entries())
            .filter(([_, value]) => !value.isLearnt)
            .map(([key]) => key);
    }
    getAllAvailablePostreqSubjects(unlearntSubjects) {
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
    findAllUnlearntPrereqSubjects(skillNodeSubject) {
        // Return nothing if the subject doesn't exist in the map
        if (!this.skillNodeMap.get(skillNodeSubject)) {
            return [];
        }
        // Get some values to kick off the recursion initially
        const currentSkillNode = this.skillNodeMap.get(skillNodeSubject);
        const unlearntPrereqSubjects = this.getUnlearntPrereqSubjects(currentSkillNode);
        // Kick off the recursive function
        const allUnlearntPrereqs = this.findUnlearntPrereqSubjects(unlearntPrereqSubjects);
        /* Set the returned array to remove values that are duplicate
               as there could be on some types of graph with differing
               levels */
        return [...new Set(allUnlearntPrereqs)];
    }
    getUnlearntPrereqSubjects(currentSkillNode) {
        const unlearntPrereqSubjects = [];
        for (let i = 0; i < currentSkillNode.prereqs.length; i++) {
            const skillNodeToCheck = this.skillNodeMap.get(currentSkillNode.prereqs[i]);
            if (skillNodeToCheck.isLearnt === false) {
                unlearntPrereqSubjects.push(currentSkillNode.prereqs[i]);
            }
        }
        return unlearntPrereqSubjects;
    }
    findUnlearntPrereqSubjects(unlearntPrereqSubjects) {
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
        return unlearntPrereqSubjects.concat(this.findUnlearntPrereqSubjects(newUnlearntPrereqs));
    }
    printFindings(message, subjects) {
        console.log(message);
        for (let i = 0; i < subjects.length; i++) {
            console.log(subjects[i]);
        }
    }
}
exports.default = SkillNodeFinder;
