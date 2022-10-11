import { Schema, model } from 'mongoose';

const Comments = new Schema({
	name: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
}); // Faltaria ferlo

export default model('Comments', Comments);