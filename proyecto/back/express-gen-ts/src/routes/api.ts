import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import Libro from '@src/models/Libro';
import UserRoutes from './LibroRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();
// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(
  Paths.Libro.GetAllLibros,
  UserRoutes.getAllLibros,
);
userRouter.get(
  Paths.Libro.GetLibro,
  UserRoutes.getOneLibro,
);
// Add one user
userRouter.post(
  Paths.Libro.Add,
  UserRoutes.addLibro,
);

// Update one user
userRouter.put(
  Paths.Libro.Update,
  UserRoutes.updateLibro,
);

// Delete one user
userRouter.delete(
  Paths.Libro.Delete,
  UserRoutes.deleteLibro,
);

// Add UserRouter
apiRouter.use(Paths.Libro.Base, userRouter);


// **** Export default **** //

export default apiRouter;
