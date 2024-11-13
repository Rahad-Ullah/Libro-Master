"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const member_validation_1 = require("./member.validation");
const router = express_1.default.Router();
// create a new member
router.post("/", (0, validateRequest_1.default)(member_validation_1.memberValidationSchemas.createValidationSchema), member_controller_1.memberControllers.createMember);
// retrieve all members
router.get("/", member_controller_1.memberControllers.getAllMembers);
// retrieve single member by memberId
router.get("/:memberId", member_controller_1.memberControllers.getSingleMember);
// update member by memberId
router.put("/:memberId", (0, validateRequest_1.default)(member_validation_1.memberValidationSchemas.updateValidationSchema), member_controller_1.memberControllers.updateMember);
// delete member by memberId
router.delete("/:memberId", member_controller_1.memberControllers.deleteMember);
exports.memberRoutes = router;
