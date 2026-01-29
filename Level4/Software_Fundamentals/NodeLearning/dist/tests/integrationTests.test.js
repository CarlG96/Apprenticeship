"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkillNodeFinder_1 = __importDefault(require("../src/SkillNodeFinder"));
const skillNodeMaps_1 = require("../src/skillNodeMaps");
test("The correct postrequisite subjects that are available to learn are found on map 1", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap1)();
    const postreqFinder = new SkillNodeFinder_1.default(skillNodeMap);
    // Act
    const allLearnableSubjects = postreqFinder.findAllAvailablePostreqSubjects();
    // Assert
    expect(allLearnableSubjects).toEqual(["Skill 2"]);
});
test("The correct postrequisite subjects that are available to learn are found on map 2", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap2)();
    const postreqFinder = new SkillNodeFinder_1.default(skillNodeMap);
    // Act
    const allLearnableSubjects = postreqFinder.findAllAvailablePostreqSubjects();
    // Assert
    expect(allLearnableSubjects).toEqual(["Skill 4"]);
});
test("The correct postrequisite subjects that are available to learn are found on map 3", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap3)();
    const postreqFinder = new SkillNodeFinder_1.default(skillNodeMap);
    // Act
    const allLearnableSubjects = postreqFinder.findAllAvailablePostreqSubjects();
    // Assert
    expect(allLearnableSubjects).toEqual(["Skill 6", "Skill 7", "Skill 9"]);
});
test("The correct prerequisite subjects are returned for input map 1 on Skill 3", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap1)();
    const prereqFinder = new SkillNodeFinder_1.default(skillNodeMap);
    // Act
    const allUnlearntPrereqs = prereqFinder.findAllUnlearntPrereqSubjects("Skill 3");
    // Assert
    expect(allUnlearntPrereqs).toEqual(["Skill 2"]);
});
test("The correct prerequisite subjects are returned for input map 2 on Skill 7", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap2)();
    const prereqFinder = new SkillNodeFinder_1.default(skillNodeMap);
    // Act
    const allUnlearntPrereqs = prereqFinder.findAllUnlearntPrereqSubjects("Skill 7");
    // Assert
    expect(allUnlearntPrereqs).toEqual(["Skill 5", "Skill 4"]);
});
test("The correct prerequisite subjects are returned for input map 3 on Skill 13", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap3)();
    const prereqFinder = new SkillNodeFinder_1.default(skillNodeMap);
    // Act
    const allUnlearntPrereqs = prereqFinder.findAllUnlearntPrereqSubjects("Skill 13");
    // Assert
    expect(allUnlearntPrereqs).toEqual([
        "Skill 9",
        "Skill 10",
        "Skill 8",
        "Skill 6",
        "Skill 7",
    ]);
});
