import { Router } from 'express'
import {
    ctrlGetAllLibros,
    ctrlGetLibroById,
    ctrlDeleteLibro,
    ctrlUpdateLibro,
    ctrlCreateNewLibro
} from '../controllers/libroController.js'

const libroRouter = Router()

// ver todos los libros
libroRouter.get('/', ctrlGetAllLibros);

// ver un libro
