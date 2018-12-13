const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventId: { type: String, unique: true },
  sudentId: String,
  instructorId: String,
  title: String,
  eventDetail: String,
  start: Date,
  end: Date,
}, { timestamps: true });

/**
 * Password hash middleware.
 */
// eventSchema.pre('save', function save (next) {
//   const event = this;
//   if (!event.isModified('password')) { return next(); }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) { return next(err); }
//     bcrypt.hash(event.password, salt, null, (err, hash) => {
//       if (err) { return next(err); }
//       event.password = hash;
//       next();
//     });
//   });
// });

/**
 * Helper method for validating event's password.
 */
// eventSchema.methods.comparePassword = function comparePassword (candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     cb(err, isMatch);
//   });
// };

/**
 * Helper method for getting event's gravatar.
 */
// eventSchema.methods.gravatar = function gravatar (size) {
//   if (!size) {
//     size = 200;
//   }
//   if (!this.email) {
//     return `https://gravatar.com/avatar/?s=${size}&d=retro`;
//   }
//   const md5 = crypto.createHash('md5').update(this.email).digest('hex');
//   return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
// };

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
