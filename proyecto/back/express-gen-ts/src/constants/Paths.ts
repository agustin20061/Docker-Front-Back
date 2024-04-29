/**
 * Express router paths go here.
 */

import User from "@src/models/Libro";


export default {
  Base: '/',
  Libro: {
    Base: '/',
    GetAllLibros: '',
    GetLibro:'/:id',
    Add: '',
    Update: '/:id',
    Delete: '/:id',
  },
} as const;
