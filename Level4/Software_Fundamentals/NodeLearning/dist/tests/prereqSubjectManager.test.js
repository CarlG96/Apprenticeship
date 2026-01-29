"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prereqSubjectManager_1 = __importDefault(require("../src/prereqSubjectManager"));
const skillNodeMaps_1 = require("../src/skillNodeMaps");
test("The correct prerequisite subjects are returned for input map 1 on Skill 3", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap1)();
    const prereqSubjectManager = new prereqSubjectManager_1.default(skillNodeMap);
    // Act
    const allUnlearntPrereqs = prereqSubjectManager.getUnlearntPrereqSubjectsForSubject("Skill 3");
    // Assert
    expect(allUnlearntPrereqs).toEqual(["Skill 2"]);
});
test("The correct prerequisite subjects are returned for input map 2 on Skill 7", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap2)();
    const prereqSubjectManager = new prereqSubjectManager_1.default(skillNodeMap);
    // Act
    const allUnlearntPrereqs = prereqSubjectManager.getUnlearntPrereqSubjectsForSubject("Skill 7");
    // Assert
    expect(allUnlearntPrereqs).toEqual(["Skill 5", "Skill 4"]);
});
test("The correct prerequisite subjects are returned for input map 3 on Skill 13", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap3)();
    const prereqSubjectManager = new prereqSubjectManager_1.default(skillNodeMap);
    // Act
    const allUnlearntPrereqs = prereqSubjectManager.getUnlearntPrereqSubjectsForSubject("Skill 13");
    // Assert
    expect(allUnlearntPrereqs).toEqual([
        "Skill 9",
        "Skill 10",
        "Skill 8",
        "Skill 6",
        "Skill 7",
    ]);
});
