import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../logs/api.log");

if (!fs.existsSync(path.dirname(filePath))) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${req.method} ${req.url} \n`;

  console.log(logEntry);

  fs.appendFile(filePath, logEntry, (err) => {
    if (err) console.error("Error writing to this log file: ", err);
  });

  res.on("finish", () => {
    const responseLog = `[${timestamp}] ${req.method} ${req.url} - ${res.statusCode} \n`;
    console.log(responseLog);

    fs.appendFile(filePath, responseLog, (err) => {
      if (err) {
        console.error("Error writing to this log file ", err);
      }
    });
  });
  next();
};

export default logRequest;
