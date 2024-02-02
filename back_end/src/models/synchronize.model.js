const mongoose = require('mongoose');

const synchronizeSchema = mongoose.Schema(
  {
    block_number: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);


/**
 * @typedef Synchronize
 */
const Synchronize = mongoose.model('Synchronize', synchronizeSchema);

module.exports = Synchronize;
