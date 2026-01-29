"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    logFindings(message, subjects) {
        console.log(message);
        for (let i = 0; i < subjects.length; i++) {
            console.log(subjects[i]);
        }
    }
}
exports.default = Logger;
