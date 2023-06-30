import { Router } from "express";
import publicRouter from "./public";
import adminRouter from "./admin/admin";

const router = Router();

router.use('/public', publicRouter);
router.use('/admin', adminRouter);

export default router;