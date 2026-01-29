import PrereqSubjectManager from "../src/prereqSubjectManager";
import {
  createSkillNodeMap1,
  createSkillNodeMap2,
  createSkillNodeMap3,
} from "../src/skillNodeMaps";

test("The correct prerequisite subjects are returned for input map 1 on Skill 3", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap1();
  const prereqSubjectManager = new PrereqSubjectManager(skillNodeMap);

  // Act
  const allUnlearntPrereqs =
    prereqSubjectManager.getUnlearntPrereqSubjectsForSubject("Skill 3");

  // Assert
  expect(allUnlearntPrereqs).toEqual(["Skill 2"]);
});

test("The correct prerequisite subjects are returned for input map 2 on Skill 7", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap2();
  const prereqSubjectManager = new PrereqSubjectManager(skillNodeMap);

  // Act
  const allUnlearntPrereqs =
    prereqSubjectManager.getUnlearntPrereqSubjectsForSubject("Skill 7");

  // Assert
  expect(allUnlearntPrereqs).toEqual(["Skill 5", "Skill 4"]);
});

test("The correct prerequisite subjects are returned for input map 3 on Skill 13", () => {
  // Arrange
  const skillNodeMap = createSkillNodeMap3();
  const prereqSubjectManager = new PrereqSubjectManager(skillNodeMap);

  // Act
  const allUnlearntPrereqs =
    prereqSubjectManager.getUnlearntPrereqSubjectsForSubject("Skill 13");

  // Assert
  expect(allUnlearntPrereqs).toEqual([
    "Skill 9",
    "Skill 10",
    "Skill 8",
    "Skill 6",
    "Skill 7",
  ]);
});
