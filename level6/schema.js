//Level 6 – Nested array inside object
const document = {
  name: "Vivek Kumar",
  education: {
    college: "XYZ College",
    degrees: [{ degree: "B.Tech", year: 2023 }],
  },
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  education: {
    type: {
      college: { type: String, default: "" },
      degrees: {
        type: [
          {
            degree: { type: String, default: "" },
            year: { type: Number, default: 0 },
          },
        ],
        default: () => [],
      },
    },
    default: () => ({}),
  },
});
