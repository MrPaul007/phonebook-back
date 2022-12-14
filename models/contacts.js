const { Schema, model } = require("mongoose");
const Joi = require("Joi");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"]
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  favorite: {
    type: Boolean,
    default: false
  }
});

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean()
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required()
});

const schemas = {
  addSchema,
  updateFavoriteSchema
};

module.exports = {
  schemas,
  Contact
};
