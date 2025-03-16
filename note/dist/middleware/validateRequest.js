"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (Schema) => (req, res, next) => {
    try {
        const errors = {};
        for (const key in Schema) {
            if (Object.prototype.hasOwnProperty.call(Schema, key)) {
                const validate = Schema[key];
                const error = validate(req.body[key]);
                if (error) {
                    errors[key] = error;
                }
            }
        }
        if (Object.keys(errors).length > 0) {
            res.status(400).json({
                success: false,
                errors,
            });
        }
    }
    catch (err) {
        next(err);
    }
    next();
};
exports.validateRequest = validateRequest;
