import { model, Schema } from 'mongoose'

const Libro = new Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

const LibroModel = model('Libro', Libro)

export { LibroModel }

