import { LibroModel } from '../models/Libro.js'

// crear alumno
export const ctrlCreateNewLibro = async (req, res) => {
    const { titulo, autor, genero, year  } = req.body

    try {
        const newLibro = new LibroModel({ titulo, autor, genero, year })

        await newLibro.save()

        res.status(201).json(newLibro)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el libro' })
    }
}

// obtener todos los libros
export const ctrlGetAllLibros = async (req, res) => {
    try {
        const allLibros = await LibroModel.find()
        res.status(200).json(allLibros)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los libros'})
    }
}

// obtener un libro
export const ctrlGetLibroById = async (req, res) => {
    const libroId = req.params.id

    try {
        const libro = await LibroModel.findById(libroId)

        if(!libro) {
            return res.sendStatus(403)
        }

        res.status(200).json(libro)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener el libro' })
    }
}

// actualizar libro
export const ctrlUpdateLibro = async (req, res) => {
    const libroId = req.params.id
    const { titulo, genero, year, autor } = req.body

    try {
        await LibroModel.findByIdAndUpdate(libroId, { titulo, genero, year, autor })

        res.status(200).json({message: 'Libro actualizado'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar el libro' })
    }
}

// eliminar libro
export const ctrlDeleteLibro = async (req, res) => {
    const libroId = res.body.id

    try {
        await LibroModel.findByIdAndDelete(libroId)
        res.status(200).json({message: 'Libro eliminado'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el libro' })
    }
}




