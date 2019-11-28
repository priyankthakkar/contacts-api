const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
	_id: Schema.Types.ObjectId,
	first_name: { type: String, required: true},
	last_name: { type: String, required: true},
	email: { type: String },
	mobile: { type: String, required: true }
	home: { type: String },
	work: { type: String },
	profile_image: { type: String }
});

module.exports = mongoose.model('Contact', contactSchema);