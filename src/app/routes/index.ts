import express from "express";
import { bookRoutes } from "../modules/Book/book.route";
import { memberRoutes } from "../modules/Member/member.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
