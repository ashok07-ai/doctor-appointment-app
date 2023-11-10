import express from "express";
import { updateDoctor, getAllDoctor, getDoctorById, deleteDoctor } from "../controllers/DoctorController.js";
import { aunthicateToken, authorizeByRoles } from "../middlewares/verifyToken.js";
import reviewRouter from "./reviewRoute.js"

const router = express.Router();

// nested route
router.use("/:doctorId/reviews", reviewRouter)
router.get('/', getAllDoctor)
router.get('/:id', getDoctorById);
router.put('/:id', aunthicateToken, authorizeByRoles(['doctor']), updateDoctor);
router.delete('/:id', aunthicateToken, authorizeByRoles(['doctor']), deleteDoctor)

export default router