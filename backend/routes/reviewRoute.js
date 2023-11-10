import express from "express";
import { aunthicateToken, authorizeByRoles } from "../middlewares/verifyToken.js";
import { createReview, getAllReviews } from "../controllers/ReviewController.js"

const router = express.Router({ mergeParams: true });

router.get('/', getAllReviews).post('/', aunthicateToken, authorizeByRoles(['patient']), createReview)

export default router