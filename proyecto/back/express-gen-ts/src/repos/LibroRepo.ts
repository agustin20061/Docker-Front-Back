import { ILibro } from '@src/models/Libro';

import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one user.
 */
async function getOneLibro(id: number): Promise<ILibro | null> {
  const db = await orm.openDb();
  console.log(id);
  for (const user of db.libros) {
    if (user.id === id) {
      return user;
    }
  }


  return null;
}

/**
 * See if a user with the given id exists.
 */
async function persistsLibro(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const user of db.libros) {
    if (user.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all users.
 */
async function getAllLibro(): Promise<ILibro[]> {
  const db = await orm.openDb();
  return db.libros;
}

/**
 * Add one user.
 */
async function addLibro(libro: ILibro): Promise<void> {
  const db = await orm.openDb();
  db.libros.push(libro);
  return orm.saveDb(db);
}

/**
 * Update a user.
 */
async function updateLibro(user: ILibro): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.libros.length; i++) {
    if (db.libros[i].id === user.id) {
      const dbUser = db.libros[i];
      db.libros[i] = {
        ...dbUser,
        id:user.id,
        titulo:user.titulo,
        autor: user.autor,
        anio: user.anio,
        cantPag: user.cantPag,
        editorial: user.editorial,
        prestado: user.prestado
      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one user.
 */
async function deleteLibro(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.libros.length; i++) {
    if (db.libros[i].id === id) {
      db.libros.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}


// **** Export default **** //

export default {
  getOneLibro,
  persistsLibro,
  getAllLibro,
  addLibro,
  updateLibro,
  delete: deleteLibro,
} as const;
