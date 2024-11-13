"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        status: 500,
        message: err.message || "Something went wrong",
    });
};
exports.default = globalErrorHandler;
