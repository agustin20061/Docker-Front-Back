import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import UserService from '@src/services/LibroService';
import { ILibro } from '@src/models/Libro';
import { IReq, IRes } from './types/express/misc';
import { log } from 'console';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAllLibros(_: IReq, res: IRes) {
  const libros = await UserService.getAllLibro();
  return res.status(HttpStatusCodes.OK).json( libros );
}
/**
 * get one libro.
 */
async function getOneLibro(req: IReq, res: IRes) {
  const id = +req.params.id;
  const libros = await UserService.getOneLibro(id);
  return res.status(HttpStatusCodes.OK).json(libros);
}
/**
 * Add one user.
 */
async function addLibro(req: IReq<{libro: ILibro}>, res: IRes) {
  const { libro } = req.body;
  console.log(libro);
  await UserService.addOneLibro(libro);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function updateLibro(req: IReq<{libro: ILibro}>, res: IRes) {
  console.log(req.body);
  
  const { libro } = req.body;
  await UserService.updateOneLibro(libro);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function deleteLibro(req: IReq, res: IRes) {
  const id = +req.params.id;
  await UserService.deleteLibro(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAllLibros,
  getOneLibro,
  addLibro,
  updateLibro,
  deleteLibro,
} as const;
