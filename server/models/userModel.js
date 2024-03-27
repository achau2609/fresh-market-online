const mongoose = require("mongoose");
const emailValidator = require("email-validator");

const addressSchema = mongoose.Schema({
  address1: { type: String, required: true },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zip: { type: String, required: false },
});

const customerSchema = mongoose.Schema({
  address: { type: addressSchema, required: true },
});

const staffSchema = mongoose.Schema({
  position: { type: String, required: true },
  hireDate: { type: String, required: true },
});

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contactNumber: { type: String, required: false },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: emailValidator.validate,
      message: (props) => `${props.value} is not a valid email address`,
    },
    secret: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
  },
  customer: { type: customerSchema, required: false },
  staff: { type: staffSchema, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
