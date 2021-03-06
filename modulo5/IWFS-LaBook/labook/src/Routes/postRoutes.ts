import express from 'express';
import { PostController } from '../Controller/postController';

export const postRouter = express.Router();
const postControlller = new PostController();

postRouter.post('/create', postControlller.createPost);
postRouter.get('/:id', postControlller.getPostById);