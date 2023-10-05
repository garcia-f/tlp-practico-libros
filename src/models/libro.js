import { model, Schema } from 'mongoose'

const Libro = new Schema({
    title: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    }
})

const LibroModel = model('Libro', Libro)

export { LibroModel }

