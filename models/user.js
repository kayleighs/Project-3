const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  isAdmin: { type: Boolean, required: true, default: false },
  statement: {type: String},
  badges: [ {type: String} ], //could be a string that explains the type of badge to show on profile
  savedJobs: [{type: String} ], //This will probably be equal to the _id of the Jobs object
  appliedJobs: [{type: String} ],
  hiredJobs: [{type: String} ], 
  address: {type: String, required: true},
  location: {
    lat : { type: String, required: true },
    lng : { type: String, required: true }
  },
  dateJoined: { type: Date, default: Date.now }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
