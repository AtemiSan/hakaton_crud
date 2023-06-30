import { Router } from 'express';
import postController from '../../controllers/post.controller';

const router = Router();

router.get('/getAll', postController.getAllPosts);
router.get('/getPost', postController.getPost);

export default router;