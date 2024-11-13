"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use("/api", routes_1.default);
// global error handler
app.use(globalErrorHandler_1.default);
app.get("/", (req, res) => {
    res.send({
        message: "Libro Master Server is running",
    });
});
// not found handler
app.use((req, res, next) => {
    res.status(400).json({
        success: false,
        message: "API not found",
        error: {
            path: req.originalUrl,
            message: "Your requested API is not available",
        },
    });
});
exports.default = app;
