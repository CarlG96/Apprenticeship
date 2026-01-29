"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subjectStatusManager_1 = __importDefault(require("./subjectStatusManager"));
const roleBasedSubjectManager_1 = __importDefault(require("./roleBasedSubjectManager"));
const prereqSubjectManager_1 = __importDefault(require("./prereqSubjectManager"));
const logger_1 = __importDefault(require("./logger"));
class SkillManagementSystem {
    constructor(skillNodeMap) {
        this.subjectStatusManager = new subjectStatusManager_1.default(skillNodeMap);
        this.roleBasedSubjectManager = new roleBasedSubjectManager_1.default(skillNodeMap);
        this.prereqSubjectManager = new prereqSubjectManager_1.default(skillNodeMap);
        this.logger = new logger_1.default();
    }
}
exports.default = SkillManagementSystem;
