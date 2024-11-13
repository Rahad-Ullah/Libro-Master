"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    const status = (err === null || err === void 0 ? void 0 : err.statusCode) || 500;
    res.status(status).json({
        success: false,
        status,
        message: err.message || "Something went wrong",
    });
};
exports.default = globalErrorHandler;
