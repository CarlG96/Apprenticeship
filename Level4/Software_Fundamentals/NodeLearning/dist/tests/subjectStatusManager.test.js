"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skillNodeMaps_1 = require("../src/skillNodeMaps");
const subjectStatusManager_1 = __importDefault(require("../src/subjectStatusManager"));
test("The correct number of unlearnt subjects are found on map 1", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap1)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjects = subjectStatusManager.getAllUnlearntSubjects();
    // Arrange
    expect(unlearntSubjects.length).toBe(2);
});
test("The correct number of unlearnt subjects are found on map 2", () => {
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap2)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjects = subjectStatusManager.getAllUnlearntSubjects();
    // Arrange
    expect(unlearntSubjects.length).toBe(4);
});
test("The correct number of unlearnt subjects are found on map 3", () => {
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap3)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjects = subjectStatusManager.getAllUnlearntSubjects();
    // Arrange
    expect(unlearntSubjects.length).toBe(8);
});
test("The correct number of learnt subjects are found on map 1", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap1)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjects = subjectStatusManager.getAllLearntSubjects();
    // Arrange
    expect(unlearntSubjects.length).toBe(1);
});
test("The correct number of learnt subjects are found on map 2", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap2)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjects = subjectStatusManager.getAllLearntSubjects();
    // Arrange
    expect(unlearntSubjects.length).toBe(3);
});
test("The correct number of learnt subjects are found on map 3", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap3)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjects = subjectStatusManager.getAllLearntSubjects();
    // Arrange
    expect(unlearntSubjects.length).toBe(5);
});
test("The correct postrequisite subjects that are available to learn are found on map 1", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap1)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const allLearnableSubjects = subjectStatusManager.getAvailablePostreqSubjects();
    // Assert
    expect(allLearnableSubjects).toEqual(["Skill 2"]);
});
test("The correct postrequisite subjects that are available to learn are found on map 2", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap2)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const allLearnableSubjects = subjectStatusManager.getAvailablePostreqSubjects();
    // Assert
    expect(allLearnableSubjects).toEqual(["Skill 4"]);
});
test("The correct postrequisite subjects that are available to learn are found on map 3", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap3)();
    const subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
    // Act
    const allLearnableSubjects = subjectStatusManager.getAvailablePostreqSubjects();
    // Assert
    expect(allLearnableSubjects).toEqual(["Skill 6", "Skill 7", "Skill 9"]);
});
