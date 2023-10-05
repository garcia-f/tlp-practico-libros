import { model, Schema } from 'mongoose'

const Author = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bibliografia: {
        type: String,
        required: true
    }       
});

const AuthorModel = model('Author', Author);

export { AuthorModel };