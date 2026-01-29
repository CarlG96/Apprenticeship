import {
  createSkillNodeMap1,
  createSkillNodeMap2,
  createSkillNodeMap3,
} from "../src/skillNodeMaps";
import SubjectStatusManager from "../src/subjectStatusManager";

test("The correct number of unlearnt subjects are found on map 1", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap1();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const unlearntSubjects = subjectStatusManager.getAllUnlearntSubjects();

  // Arrange
  expect(unlearntSubjects.length).toBe(2);
});

test("The correct number of unlearnt subjects are found on map 2", () => {
  const skillNodeMap = createSkillNodeMap2();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const unlearntSubjects = subjectStatusManager.getAllUnlearntSubjects();

  // Arrange
  expect(unlearntSubjects.length).toBe(4);
});

test("The correct number of unlearnt subjects are found on map 3", () => {
  const skillNodeMap = createSkillNodeMap3();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const unlearntSubjects = subjectStatusManager.getAllUnlearntSubjects();

  // Arrange
  expect(unlearntSubjects.length).toBe(8);
});

test("The correct number of learnt subjects are found on map 1", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap1();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const unlearntSubjects = subjectStatusManager.getAllLearntSubjects();

  // Arrange
  expect(unlearntSubjects.length).toBe(1);
});

test("The correct number of learnt subjects are found on map 2", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap2();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const unlearntSubjects = subjectStatusManager.getAllLearntSubjects();

  // Arrange
  expect(unlearntSubjects.length).toBe(3);
});

test("The correct number of learnt subjects are found on map 3", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap3();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const unlearntSubjects = subjectStatusManager.getAllLearntSubjects();

  // Arrange
  expect(unlearntSubjects.length).toBe(5);
});

test("The correct postrequisite subjects that are available to learn are found on map 1", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap1();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const allLearnableSubjects =
    subjectStatusManager.getAvailablePostreqSubjects();

  // Assert
  expect(allLearnableSubjects).toEqual(["Skill 2"]);
});

test("The correct postrequisite subjects that are available to learn are found on map 2", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap2();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const allLearnableSubjects =
    subjectStatusManager.getAvailablePostreqSubjects();

  // Assert
  expect(allLearnableSubjects).toEqual(["Skill 4"]);
});

test("The correct postrequisite subjects that are available to learn are found on map 3", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap3();
  const subjectStatusManager = new SubjectStatusManager(skillNodeMap);

  // Act
  const allLearnableSubjects =
    subjectStatusManager.getAvailablePostreqSubjects();

  // Assert
  expect(allLearnableSubjects).toEqual(["Skill 6", "Skill 7", "Skill 9"]);
});
