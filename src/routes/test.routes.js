import { Router } from "express";
import { testAPI } from "../controllers/test.controllers.js";

const router = Router()

router.route("/").post(testAPI)

export default router