//Level 7 – Nested object + array + primitives
const document = {
  name: "Vivek Kumar",
  profile: {
    bio: "Learner",
    socialLinks: ["facebook.com/vivek", "github.com/vivek"],
  },
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  profile: {
    type: {
      bio: {
        type: String,
        default: "",
      },
      socialLinks: {
        type: [String],
        default: () => [],
      },
    },
    default: () => ({}),
  },
});
