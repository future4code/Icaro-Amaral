import { app } from './Controller/app';
import { postRouter } from './Routes/postRoutes';
import { userRouter } from './Routes/userRoutes';

app.use('/users', userRouter);
app.use('/posts', postRouter);