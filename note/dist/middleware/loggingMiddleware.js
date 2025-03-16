"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../logs/api.log");
if (!fs_1.default.existsSync(path_1.default.dirname(filePath))) {
    fs_1.default.mkdirSync(path_1.default.dirname(filePath), { recursive: true });
}
const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${req.method} ${req.url} \n`;
    console.log(logEntry);
    fs_1.default.appendFile(filePath, logEntry, (err) => {
        if (err)
            console.error("Error writing to this log file: ", err);
    });
    res.on("finish", () => {
        const responseLog = `[${timestamp}] ${req.method} ${req.url} - ${res.statusCode} \n`;
        console.log(responseLog);
        fs_1.default.appendFile(filePath, responseLog, (err) => {
            if (err) {
                console.error("Error writing to this log file ", err);
            }
        });
    });
    next();
};
exports.default = logRequest;
