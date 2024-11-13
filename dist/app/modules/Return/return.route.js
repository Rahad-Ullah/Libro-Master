"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controller_1 = require("../Borrow/borrow.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const return_validation_1 = require("./return.validation");
const router = express_1.default.Router();
// return a book
router.post("/", (0, validateRequest_1.default)(return_validation_1.returnValidationSchema), borrow_controller_1.borrowRecordControllers.returnBook);
exports.returnBookRoutes = router;
