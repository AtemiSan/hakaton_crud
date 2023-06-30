import { Router } from "express";
import userController from "../../controllers/user.controller";
import { AdminMiddleware} from "../../middlewares/admin.middleware";
import passport from "passport";

const router = Router();

router.use(passport.authenticate("jwt", { session: false }), AdminMiddleware);

router.get('/users', userController.getAllUsers);

export default router;