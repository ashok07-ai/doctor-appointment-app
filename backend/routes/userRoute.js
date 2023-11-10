import express from "express";
import { updateUser, getAllUser, getUserById, deleteUser } from "../controllers/UserController.js";
import { aunthicateToken, authorizeByRoles } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get('/', aunthicateToken, authorizeByRoles(['admin', 'patient']), getAllUser)
router.get('/:id', aunthicateToken, authorizeByRoles(['patient']), getUserById);
router.put('/:id', aunthicateToken, authorizeByRoles(['patient']), updateUser);
router.delete('/:id', aunthicateToken, authorizeByRoles(['patient']), deleteUser)

export default router