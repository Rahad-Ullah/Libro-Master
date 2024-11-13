import express from "express";
import { memberControllers } from "./member.controller";
import validateRequest from "../../middlewares/validateRequest";
import { memberValidationSchemas } from "./member.validation";
const router = express.Router();

// create a new member
router.post(
  "/",
  validateRequest(memberValidationSchemas.createValidationSchema),
  memberControllers.createMember
);

// retrieve all members
router.get("/", memberControllers.getAllMembers);

// retrieve single member by memberId
router.get("/:memberId", memberControllers.getSingleMember);

// update member by memberId
router.put("/:memberId", validateRequest(memberValidationSchemas.updateValidationSchema), memberControllers.updateMember);

// delete member by memberId
router.delete("/:memberId", memberControllers.deleteMember);

export const memberRoutes = router;
