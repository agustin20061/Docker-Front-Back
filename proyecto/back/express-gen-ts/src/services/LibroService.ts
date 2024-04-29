import UserRepo from '@src/repos/LibroRepo';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { ILibro } from '@src/models/Libro';


// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';
export const LIBRO_NOT_FOUND = 'Libro not found';

// **** Functions **** //

/**
 * Get all users.
 */
function getAllLibro(): Promise<ILibro[]> {
  return UserRepo.getAllLibro();
}

async function getOneLibro(ISBN: number): Promise<ILibro | null> {
  const persists = await UserRepo.persistsLibro(ISBN);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      LIBRO_NOT_FOUND,
    );
  }
  
  return UserRepo.getOneLibro(ISBN);
}
/**
 * Add one user.
 */
function addOneLibro(libro: ILibro): Promise<void> {
  return UserRepo.addLibro(libro);
}

/**
 * Update one user.
 */
async function updateOneLibro(libro: ILibro): Promise<void> {
  console.log(libro);
  
  const persists = await UserRepo.persistsLibro(libro.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Return user
  return UserRepo.updateLibro(libro);
}

/**
 * Delete a user by their id.
 */
async function deleteLibro(id: number): Promise<void> {
  const persists = await UserRepo.persistsLibro(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return UserRepo.delete(id);
}


// **** Export default **** //

export default {
  getAllLibro,
  getOneLibro,
  addOneLibro,
  updateOneLibro,
  deleteLibro,
} as const;
