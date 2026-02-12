//Level 10 – Array of nested objects with array inside
const document = {
  name: "Vivek Kumar",
  projects: [
    {
      title: "Portfolio",
      technologies: ["React", "Node"],
      team: [{ name: "Alice", role: "Designer" }],
    },
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
        title: {
          type: String,
          default: "",
        },
        technologies: {
          type: [String],
          default: () => [],
        },
        team: {
          type: [
            {
              name: { type: String, default: "" },
              role: { type: String, default: "" },
            },
          ],
          default: () => [],
        },
      },
    ],
    default: () => [],
  },
});
