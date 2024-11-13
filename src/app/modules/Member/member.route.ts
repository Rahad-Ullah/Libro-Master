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

export const memberRoutes = router;
