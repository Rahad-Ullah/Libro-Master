import express from "express";
import { bookRoutes } from "../modules/Book/book.route";
import { memberRoutes } from "../modules/Member/member.route";
import { borrowRecordRoutes } from "../modules/Borrow/borrow.route";
import { returnBookRoutes } from "../modules/Return/return.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: bookRoutes,
  },
  {
    path: "/members",
    route: memberRoutes,
  },
  {
    path: "/borrow",
    route: borrowRecordRoutes,
  },
  {
    path: "/return",
    route: returnBookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
