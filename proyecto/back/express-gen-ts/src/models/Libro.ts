import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface ILibro {
  id: number;
  titulo: string;
  autor: string;
  anio: number;
  cantPag: number;
  editorial: string;
  prestado: boolean;
}



// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  id?: number,
  titulo?: string,
  autor?: string,
  anio?: number,
  cantPag?: number,
  editorial?: string,
  prestado?: boolean,
   // id last cause usually set by db
): ILibro {
  return {
    id: (id ?? -1),
    titulo: (titulo ?? ''),
    autor: (autor ?? ''),
    anio: (anio ?? 2024),
    cantPag: (cantPag ?? 0),
    editorial: (editorial ?? ''),
    prestado: (prestado ?? false)
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): ILibro {
  if (!isLibro(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as ILibro;
  return new_(p.id,p.titulo, p.autor, p.anio, p.cantPag, p.editorial, p.prestado);
}

/**
 * See if the param meets criteria to be a user.
 */
function isLibro(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'titulo' in arg && typeof arg.titulo === 'string' && 
    'autor' in arg && typeof arg.autor === 'string' &&
    'anio' in arg && typeof arg.anio === 'number' && 
    'cantPag' in arg && typeof arg.cantPag === 'number' && 
    'editorial' in arg && typeof arg.editorial === 'string' &&
    'prestado' in arg && typeof arg.prestado === 'boolean' 
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isLibro,
} as const;
