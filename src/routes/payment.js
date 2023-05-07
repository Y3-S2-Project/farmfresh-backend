import { Router } from "express";
import { protect } from "../middleware/auth";
import { ROLES } from "../utils/constants";
import { createPaymentController } from "../controllers/payment";

const router = Router();

router.post('/create', createPaymentController);

export default router;