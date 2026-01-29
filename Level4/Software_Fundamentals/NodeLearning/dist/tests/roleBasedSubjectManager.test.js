"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roleBasedSubjectManager_1 = __importDefault(require("../src/roleBasedSubjectManager"));
const skillNodeMaps_1 = require("../src/skillNodeMaps");
test("The correct number of unlearnt subjects for the role are found on map 1", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap1)();
    const roleBasedSubjectManager = new roleBasedSubjectManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjectsForEngineer = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Engineer");
    const unlearntSubjectsForDataScientist = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Data Scientist");
    const unlearntSubjectsForProductOwner = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Product Owner");
    // Assert
    expect(unlearntSubjectsForEngineer.length).toBe(2);
    expect(unlearntSubjectsForDataScientist.length).toBe(1);
    expect(unlearntSubjectsForProductOwner.length).toBe(0);
});
test("The correct number of unlearnt subjects for the role are found on map 2", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap2)();
    const roleBasedSubjectManager = new roleBasedSubjectManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjectsForEngineer = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Engineer");
    const unlearntSubjectsForDataScientist = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Data Scientist");
    const unlearntSubjectsForProductOwner = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Product Owner");
    // Assert
    expect(unlearntSubjectsForEngineer.length).toBe(1);
    expect(unlearntSubjectsForDataScientist.length).toBe(3);
    expect(unlearntSubjectsForProductOwner.length).toBe(1);
});
test("The correct number of unlearnt subjects for the role are found on map 3", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap3)();
    const roleBasedSubjectManager = new roleBasedSubjectManager_1.default(skillNodeMap);
    // Act
    const unlearntSubjectsForEngineer = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Engineer");
    const unlearntSubjectsForDataScientist = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Data Scientist");
    const unlearntSubjectsForProductOwner = roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Product Owner");
    // Assert
    expect(unlearntSubjectsForEngineer.length).toBe(5);
    expect(unlearntSubjectsForDataScientist.length).toBe(6);
    expect(unlearntSubjectsForProductOwner.length).toBe(5);
});
test("The correct number of learnt subjects for the role are found on map 1", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap1)();
    const roleBasedSubjectManager = new roleBasedSubjectManager_1.default(skillNodeMap);
    // Act
    const learntSubjectsForEngineer = roleBasedSubjectManager.getAllLearntSubjectsForRole("Engineer");
    const learntSubjectsForDataScientist = roleBasedSubjectManager.getAllLearntSubjectsForRole("Data Scientist");
    const learntSubjectsForProductOwner = roleBasedSubjectManager.getAllLearntSubjectsForRole("Product Owner");
    // Assert
    expect(learntSubjectsForEngineer.length).toBe(1);
    expect(learntSubjectsForDataScientist.length).toBe(0);
    expect(learntSubjectsForProductOwner.length).toBe(0);
});
test("The correct number of unlearnt subjects for the role are found on map 2", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap2)();
    const roleBasedSubjectManager = new roleBasedSubjectManager_1.default(skillNodeMap);
    // Act
    const learntSubjectsForEngineer = roleBasedSubjectManager.getAllLearntSubjectsForRole("Engineer");
    const learntSubjectsForDataScientist = roleBasedSubjectManager.getAllLearntSubjectsForRole("Data Scientist");
    const learntSubjectsForProductOwner = roleBasedSubjectManager.getAllLearntSubjectsForRole("Product Owner");
    // Assert
    expect(learntSubjectsForEngineer.length).toBe(3);
    expect(learntSubjectsForDataScientist.length).toBe(0);
    expect(learntSubjectsForProductOwner.length).toBe(0);
});
test("The correct number of unlearnt subjects for the role are found on map 3", () => {
    // Arrange
    const skillNodeMap = (0, skillNodeMaps_1.createSkillNodeMap3)();
    const roleBasedSubjectManager = new roleBasedSubjectManager_1.default(skillNodeMap);
    // Act
    const learntSubjectsForEngineer = roleBasedSubjectManager.getAllLearntSubjectsForRole("Engineer");
    const learntSubjectsForDataScientist = roleBasedSubjectManager.getAllLearntSubjectsForRole("Data Scientist");
    const learntSubjectsForProductOwner = roleBasedSubjectManager.getAllLearntSubjectsForRole("Product Owner");
    // Assert
    expect(learntSubjectsForEngineer.length).toBe(5);
    expect(learntSubjectsForDataScientist.length).toBe(2);
    expect(learntSubjectsForProductOwner.length).toBe(1);
});
