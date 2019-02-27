const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RandosSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  price: {
      type: String,
      require: true
  },
  departuredate: {
      type: String,
      required: true 
  },
  startingpoint: {
      type:String,
      required: true
  },
  activity: {
      type:String,
      required: true
  },
  duration: {
      type: String,
      require: true
  },

  image: {
      type: String,
      required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Randos = mongoose.model('Randos', RandosSchema);
