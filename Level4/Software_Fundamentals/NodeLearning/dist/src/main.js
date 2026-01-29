"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skillManagementSystem_1 = __importDefault(require("./skillManagementSystem"));
const skillNodeMaps_1 = require("./skillNodeMaps");
// Create the skill node map
const skillNodeMap = (0, skillNodeMaps_1.mainSkillNodeMap)();
// Create the finder and feed it the skill node map
const skillManagementSystem = new skillManagementSystem_1.default(skillNodeMap);
// Get all the skills that are available to learn and print them to console
skillManagementSystem.logger.logFindings("Skills you are currently able to learn are:", skillManagementSystem.subjectStatusManager.getAvailablePostreqSubjects());
// Get all the skills that are currently learnt and print them to console
skillManagementSystem.logger.logFindings("Skills you currently know are:", skillManagementSystem.subjectStatusManager.getAllLearntSubjects());
// Get all the skills that are unlearnt as an engineer
skillManagementSystem.logger.logFindings("Skills you can learn to improve you as an Engineer are:", skillManagementSystem.roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Engineer"));
// Get all the skills that are learnt as an engineer
skillManagementSystem.logger.logFindings("Skills you already know as an Engineer are:", skillManagementSystem.roleBasedSubjectManager.getAllLearntSubjectsForRole("Engineer"));
// Get all the skills that are needed to learn these skills and print them to console
const skillsToLearn = ["Skill 23", "Skill 26", "Skill 18"];
skillsToLearn.forEach((skillToLearn) => {
    skillManagementSystem.logger.logFindings(`Skills required before learning ${skillToLearn} are:`, skillManagementSystem.prereqSubjectManager.getUnlearntPrereqSubjectsForSubject(skillToLearn));
});
