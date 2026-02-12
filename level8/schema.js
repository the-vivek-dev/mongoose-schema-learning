//Level 8 – Multiple nested arrays
const document = {
  name: "Vivek Kumar",
  posts: [{ title: "Post 1", tags: ["tech", "react"] }],
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  posts: {
    type: [
      {
        title: { type: String, default: "" },
        tags: { type: [String], default: () => [] },
      },
    ],
    default: () => [],
  },
});
