import { SkillNode } from "./skillNode";

export function createSkillNodeMap1(): Map<string, SkillNode> {
  const skillNodeMap1 = new Map<string, SkillNode>();
  skillNodeMap1.set("Skill 1", {
    isLearnt: true,
    prereqs: [],
    postreqs: ["Skill 2"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap1.set("Skill 2", {
    isLearnt: false,
    prereqs: ["Skill 1"],
    postreqs: ["Skill 3"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap1.set("Skill 3", {
    isLearnt: false,
    prereqs: ["Skill 2"],
    postreqs: [],
    associatedJobRoles: ["Engineer", "Data Scientist"],
  });
  return skillNodeMap1;
}

export function createSkillNodeMap2(): Map<string, SkillNode> {
  const skillNodeMap2 = new Map<string, SkillNode>();
  skillNodeMap2.set("Skill 1", {
    isLearnt: true,
    prereqs: [],
    postreqs: ["Skill 3"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap2.set("Skill 2", {
    isLearnt: true,
    prereqs: [],
    postreqs: ["Skill 4"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap2.set("Skill 3", {
    isLearnt: true,
    prereqs: ["Skill 1"],
    postreqs: ["Skill 5"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap2.set("Skill 4", {
    isLearnt: false,
    prereqs: ["Skill 2"],
    postreqs: ["Skill 5"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap2.set("Skill 5", {
    isLearnt: false,
    prereqs: ["Skill 3", "Skill 4"],
    postreqs: ["Skill 6", "Skill 7"],
    associatedJobRoles: ["Data Scientist", "Product Owner"],
  });
  skillNodeMap2.set("Skill 6", {
    isLearnt: false,
    prereqs: ["Skill 5"],
    postreqs: [],
    associatedJobRoles: ["Data Scientist"],
  });
  skillNodeMap2.set("Skill 7", {
    isLearnt: false,
    prereqs: ["Skill 5"],
    postreqs: [],
    associatedJobRoles: ["Data Scientist"],
  });
  return skillNodeMap2;
}

export function createSkillNodeMap3(): Map<string, SkillNode> {
  const skillNodeMap3 = new Map<string, SkillNode>();
  skillNodeMap3.set("Skill 1", {
    isLearnt: true,
    prereqs: [],
    postreqs: ["Skill 2"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap3.set("Skill 2", {
    isLearnt: true,
    prereqs: ["Skill 1"],
    postreqs: ["Skill 3", "Skill 4"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap3.set("Skill 3", {
    isLearnt: true,
    prereqs: ["Skill 2"],
    postreqs: ["Skill 5"],
    associatedJobRoles: ["Engineer", "Data Scientist", "Product Owner"],
  });
  skillNodeMap3.set("Skill 4", {
    isLearnt: true,
    prereqs: ["Skill 2"],
    postreqs: ["Skill 6", "Skill 7"],
    associatedJobRoles: ["Engineer", "Data Scientist"],
  });
  skillNodeMap3.set("Skill 5", {
    isLearnt: true,
    prereqs: ["Skill 3", "Skill 6"],
    postreqs: ["Skill 9"],
    associatedJobRoles: ["Engineer"],
  });
  skillNodeMap3.set("Skill 6", {
    isLearnt: false,
    prereqs: ["Skill 4"],
    postreqs: ["Skill 5", "Skill 8"],
    associatedJobRoles: ["Data Scientist", "Product Owner"],
  });
  skillNodeMap3.set("Skill 7", {
    isLearnt: false,
    prereqs: ["Skill 4"],
    postreqs: ["Skill 8"],
    associatedJobRoles: ["Data Scientist", "Product Owner"],
  });
  skillNodeMap3.set("Skill 8", {
    isLearnt: false,
    prereqs: ["Skill 6", "Skill 7"],
    postreqs: ["Skill 10", "Skill 11", "Skill 12"],
    associatedJobRoles: ["Data Scientist", "Engineer"],
  });
  skillNodeMap3.set("Skill 9", {
    isLearnt: false,
    prereqs: ["Skill 5"],
    postreqs: ["Skill 13"],
    associatedJobRoles: ["Data Scientist"],
  });
  skillNodeMap3.set("Skill 10", {
    isLearnt: false,
    prereqs: ["Skill 8"],
    postreqs: ["Skill 13"],
    associatedJobRoles: ["Product Owner", "Engineer"],
  });
  skillNodeMap3.set("Skill 11", {
    isLearnt: false,
    prereqs: ["Skill 8"],
    postreqs: [],
    associatedJobRoles: ["Engineer", "Product Owner", "Data Scientist"],
  });
  skillNodeMap3.set("Skill 12", {
    isLearnt: false,
    prereqs: ["Skill 8"],
    postreqs: [],
    associatedJobRoles: ["Product Owner", "Engineer"],
  });
  skillNodeMap3.set("Skill 13", {
    isLearnt: false,
    prereqs: ["Skill 9", "Skill 10"],
    postreqs: [],
    associatedJobRoles: ["Engineer", "Data Scientist"],
  });
  return skillNodeMap3;
}

export function mainSkillNodeMap(): Map<string, SkillNode> {
  const mainSkillNodeMap = new Map<string, SkillNode>();
  mainSkillNodeMap.set("Skill 1", {
    isLearnt: true,
    prereqs: [],
    postreqs: ["Skill 4", "Skill 5"],
    associatedJobRoles: ["Engineer", "Product Owner"],
  });
  mainSkillNodeMap.set("Skill 2", {
    isLearnt: false,
    prereqs: [],
    postreqs: ["Skill 9", "Skill 10"],
    associatedJobRoles: ["Product Owner"],
  });
  mainSkillNodeMap.set("Skill 3", {
    isLearnt: true,
    prereqs: [],
    postreqs: ["Skill 13", "Skill 14"],
    associatedJobRoles: ["Engineer", "Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 4", {
    isLearnt: true,
    prereqs: ["Skill 1"],
    postreqs: ["Skill 7", "Skill 8", "Skill 9"],
    associatedJobRoles: ["Engineer"],
  });
  mainSkillNodeMap.set("Skill 5", {
    isLearnt: true,
    prereqs: ["Skill 1"],
    postreqs: ["Skill 8", "Skill 9"],
    associatedJobRoles: ["Engineer", "Product Owner"],
  });
  mainSkillNodeMap.set("Skill 6", {
    isLearnt: false,
    prereqs: ["Skill 7"],
    postreqs: ["Skill 15"],
    associatedJobRoles: ["Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 7", {
    isLearnt: true,
    prereqs: ["Skill 4"],
    postreqs: ["Skill 6", "Skill 8"],
    associatedJobRoles: ["Engineer"],
  });
  mainSkillNodeMap.set("Skill 8", {
    isLearnt: true,
    prereqs: ["Skill 4", "Skill 5", "Skill 7"],
    postreqs: ["Skill 16"],
    associatedJobRoles: ["Engineer", "Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 9", {
    isLearnt: false,
    prereqs: ["Skill 2", "Skill 4", "Skill 5"],
    postreqs: ["Skill 11", "Skill 12", "Skill 13"],
    associatedJobRoles: ["Product Owner", "Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 10", {
    isLearnt: false,
    prereqs: ["Skill 2"],
    postreqs: ["Skill 11", "Skill 12", "Skill 13"],
    associatedJobRoles: ["Product Owner"],
  });
  mainSkillNodeMap.set("Skill 11", {
    isLearnt: false,
    prereqs: ["Skill 9", "Skill 10"],
    postreqs: ["Skill 17"],
    associatedJobRoles: ["Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 12", {
    isLearnt: false,
    prereqs: ["Skill 9", "Skill 10"],
    postreqs: ["Skill 18"],
    associatedJobRoles: ["Data Scientist", "Engineer"],
  });
  mainSkillNodeMap.set("Skill 13", {
    isLearnt: false,
    prereqs: ["Skill 3", "Skill 9", "Skill 10"],
    postreqs: ["Skill 19"],
    associatedJobRoles: ["Data Scientist", "Product Owner"],
  });
  mainSkillNodeMap.set("Skill 14", {
    isLearnt: true,
    prereqs: ["Skill 3"],
    postreqs: ["Skill 20", "Skill 21", "Skill 22"],
    associatedJobRoles: ["Engineer"],
  });
  mainSkillNodeMap.set("Skill 15", {
    isLearnt: false,
    prereqs: ["Skill 6"],
    postreqs: ["Skill 23"],
    associatedJobRoles: ["Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 16", {
    isLearnt: true,
    prereqs: ["Skill 8"],
    postreqs: ["Skill 23"],
    associatedJobRoles: ["Engineer"],
  });
  mainSkillNodeMap.set("Skill 17", {
    isLearnt: false,
    prereqs: ["Skill 11"],
    postreqs: ["Skill 26"],
    associatedJobRoles: ["Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 18", {
    isLearnt: false,
    prereqs: ["Skill 12"],
    postreqs: ["Skill 24"],
    associatedJobRoles: ["Data Scientist", "Product Owner"],
  });
  mainSkillNodeMap.set("Skill 19", {
    isLearnt: false,
    prereqs: ["Skill 13", "Skill 20"],
    postreqs: ["Skill 24"],
    associatedJobRoles: ["Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 20", {
    isLearnt: false,
    prereqs: ["Skill 14"],
    postreqs: ["Skill 19"],
    associatedJobRoles: ["Product Owner"],
  });
  mainSkillNodeMap.set("Skill 21", {
    isLearnt: false,
    prereqs: ["Skill 14"],
    postreqs: ["Skill 25"],
    associatedJobRoles: ["Product Owner"],
  });
  mainSkillNodeMap.set("Skill 22", {
    isLearnt: true,
    prereqs: ["Skill 14"],
    postreqs: ["Skill 25"],
    associatedJobRoles: ["Engineer"],
  });
  mainSkillNodeMap.set("Skill 23", {
    isLearnt: false,
    prereqs: ["Skill 15", "Skill 16"],
    postreqs: [],
    associatedJobRoles: ["Data Scientist", "Engineer"],
  });
  mainSkillNodeMap.set("Skill 24", {
    isLearnt: false,
    prereqs: ["Skill 18", "Skill 19"],
    postreqs: ["Skill 26"],
    associatedJobRoles: ["Data Scientist"],
  });
  mainSkillNodeMap.set("Skill 25", {
    isLearnt: false,
    prereqs: ["Skill 21", "Skill 22"],
    postreqs: ["Skill 26"],
    associatedJobRoles: ["Product Owner", "Engineer"],
  });
  mainSkillNodeMap.set("Skill 26", {
    isLearnt: false,
    prereqs: ["Skill 17", "Skill 24", "Skill 25"],
    postreqs: [],
    associatedJobRoles: ["Data Scientist", "Product Owner"],
  });

  return mainSkillNodeMap;
}
