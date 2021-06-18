const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      unique: true,
    },
    name_history: {
      type: [{ _id: false, name: String, changedToAt: Number }],
      required: false,
      default: [],
    },

    lastUpdated: {
      type: Number,
      required: true,
    },
    views: {
      type: [String],
      default: [],
    },
  },
  { versionKey: false }
);
ProfileSchema.index({ name: 1 });
ProfileSchema.index({ uuid: 1 });

module.exports.ProfileSchema = ProfileSchema;
module.exports.ProfileModel = new mongoose.model("Profile", ProfileSchema);
