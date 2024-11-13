"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, jsonData) => {
    res.status(jsonData.status).json({
        success: jsonData.success,
        status: jsonData.status,
        message: jsonData.message,
        data: jsonData.data || null || undefined,
    });
};
exports.sendResponse = sendResponse;
