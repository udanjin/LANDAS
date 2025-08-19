import { Router } from "express";
import { register, login, me } from "../controller/auth";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, me);

export default router;
