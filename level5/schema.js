//Level 5 – Array of objects
const document = {
  name: "Vivek Kumar",
  projects: [
    { title: "Portfolio", duration: 3 },
    { title: "E-commerce", duration: 6 },
  ],
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  projects: {
    type: [
      {
        title: { type: String, default: "" },
        duration: { type: Number, default: 0 },
      },
    ],
    default: () => [],
  },
});
