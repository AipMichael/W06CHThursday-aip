const { Schema, model } = require("mongoose");

const thingSchema = new Schema({
  thing: {
    type: String,
    required: true,
  },
});

const Thing = model("Thing", petSchema);

module.exports = Pet;
