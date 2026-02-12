//Level 2 – Multiple primitive fields
const document = {
  name: "Vivek Kumar",
  age: 23,
  isStudent: true,
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
});
