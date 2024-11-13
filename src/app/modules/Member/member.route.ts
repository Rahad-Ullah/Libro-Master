import express from "express";
import { memberControllers } from "./member.controller";
const router = express.Router();

// create a new member
router.post("/", memberControllers.createMember);

// retrieve all members
// router.get("/", memberControllers.createMember);

export const memberRoutes = router;
