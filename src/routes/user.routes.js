import { Router } from "express";
import { userData, userData1, userData2 } from "../controllers/user.controller.js";

const router = Router()

router.route('/ram').get(userData)
router.route('/sita').get(userData1)
router.route('/hanuman').get(userData2)

export default router