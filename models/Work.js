var mongoose = require('mongoose');

var WorkSchema = new mongoose.Schema({
  project_name: String,
  roles: String,
  desc: String,
  main_img: String,
  second_img: String,
  proj_id: String
},
{ collection: 'work' }
);

module.exports = mongoose.model('Work', WorkSchema);