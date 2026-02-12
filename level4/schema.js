// Level 4 – Array of primitives
const document = {
  name: "Vivek Kumar",
  age: 23,
  skills: ["Java", "C++", "React"],
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
  skills: {
    type: [String],
    default: () => [],
  },
});
