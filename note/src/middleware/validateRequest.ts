import { Request, Response, NextFunction } from "express";

export const validateRequest =
  <T extends Record<string, any>>(Schema: {
    [K in keyof T]: (value: any) => string | null;
  }) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      const errors: Partial<Record<keyof T, string>> = {};

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
    } catch (err) {
      next(err);
    }

    next();
  };
