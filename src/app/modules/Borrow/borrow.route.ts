import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { borrowRecordControllers } from "./borrow.controller";
import { borrowRecordValidationSchemas } from "./borrow.validation";
const router = express.Router();

// create a new borrow
router.post(
  "/",
  validateRequest(borrowRecordValidationSchemas.createValidationSchema),
  borrowRecordControllers.createBorrow
);

// // retrieve all members
// router.get("/", memberControllers.getAllMembers);

// // retrieve single member by memberId
// router.get("/:memberId", memberControllers.getSingleMember);

// // update member by memberId
// router.put("/:memberId", validateRequest(memberValidationSchemas.updateValidationSchema), memberControllers.updateMember);

// // delete member by memberId
// router.delete("/:memberId", memberControllers.deleteMember);

export const borrowRecordRoutes = router;
