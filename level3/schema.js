//Level 3 – Nested object
const document = {
  name: "Vivek Kumar",
  age: 23,
  isStudent: true,
  address: {
    city: "Darbhanga",
    pincode: 846001,
  },
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    default: 0,
  },
  isStudent: {
    type: Boolean,
    default: false,
  },
  address: {
    type: {
      city: {
        type: String,
        default: "",
      },
      pincode: {
        type: Number,
        default: 0,
      },
    },
    default: () => ({}),
  },
});
