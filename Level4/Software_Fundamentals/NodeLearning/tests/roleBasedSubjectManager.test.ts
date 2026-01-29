import RoleBasedSubjectManager from "../src/roleBasedSubjectManager";
import {
  createSkillNodeMap1,
  createSkillNodeMap2,
  createSkillNodeMap3,
} from "../src/skillNodeMaps";

test("The correct number of unlearnt subjects for the role are found on map 1", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap1();
  const roleBasedSubjectManager = new RoleBasedSubjectManager(skillNodeMap);

  // Act
  const unlearntSubjectsForEngineer =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Engineer");
  const unlearntSubjectsForDataScientist =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Data Scientist");
  const unlearntSubjectsForProductOwner =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Product Owner");

  // Assert
  expect(unlearntSubjectsForEngineer.length).toBe(2);
  expect(unlearntSubjectsForDataScientist.length).toBe(1);
  expect(unlearntSubjectsForProductOwner.length).toBe(0);
});

test("The correct number of unlearnt subjects for the role are found on map 2", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap2();
  const roleBasedSubjectManager = new RoleBasedSubjectManager(skillNodeMap);

  // Act
  const unlearntSubjectsForEngineer =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Engineer");
  const unlearntSubjectsForDataScientist =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Data Scientist");
  const unlearntSubjectsForProductOwner =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Product Owner");

  // Assert
  expect(unlearntSubjectsForEngineer.length).toBe(1);
  expect(unlearntSubjectsForDataScientist.length).toBe(3);
  expect(unlearntSubjectsForProductOwner.length).toBe(1);
});

test("The correct number of unlearnt subjects for the role are found on map 3", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap3();
  const roleBasedSubjectManager = new RoleBasedSubjectManager(skillNodeMap);

  // Act
  const unlearntSubjectsForEngineer =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Engineer");
  const unlearntSubjectsForDataScientist =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Data Scientist");
  const unlearntSubjectsForProductOwner =
    roleBasedSubjectManager.getAllUnlearntSubjectsForRole("Product Owner");

  // Assert
  expect(unlearntSubjectsForEngineer.length).toBe(5);
  expect(unlearntSubjectsForDataScientist.length).toBe(6);
  expect(unlearntSubjectsForProductOwner.length).toBe(5);
});

test("The correct number of learnt subjects for the role are found on map 1", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap1();
  const roleBasedSubjectManager = new RoleBasedSubjectManager(skillNodeMap);

  // Act
  const learntSubjectsForEngineer =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Engineer");
  const learntSubjectsForDataScientist =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Data Scientist");
  const learntSubjectsForProductOwner =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Product Owner");

  // Assert
  expect(learntSubjectsForEngineer.length).toBe(1);
  expect(learntSubjectsForDataScientist.length).toBe(0);
  expect(learntSubjectsForProductOwner.length).toBe(0);
});

test("The correct number of unlearnt subjects for the role are found on map 2", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap2();
  const roleBasedSubjectManager = new RoleBasedSubjectManager(skillNodeMap);

  // Act
  const learntSubjectsForEngineer =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Engineer");
  const learntSubjectsForDataScientist =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Data Scientist");
  const learntSubjectsForProductOwner =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Product Owner");

  // Assert
  expect(learntSubjectsForEngineer.length).toBe(3);
  expect(learntSubjectsForDataScientist.length).toBe(0);
  expect(learntSubjectsForProductOwner.length).toBe(0);
});

test("The correct number of unlearnt subjects for the role are found on map 3", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap3();
  const roleBasedSubjectManager = new RoleBasedSubjectManager(skillNodeMap);

  // Act
  const learntSubjectsForEngineer =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Engineer");
  const learntSubjectsForDataScientist =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Data Scientist");
  const learntSubjectsForProductOwner =
    roleBasedSubjectManager.getAllLearntSubjectsForRole("Product Owner");

  // Assert
  expect(learntSubjectsForEngineer.length).toBe(5);
  expect(learntSubjectsForDataScientist.length).toBe(2);
  expect(learntSubjectsForProductOwner.length).toBe(1);
});
