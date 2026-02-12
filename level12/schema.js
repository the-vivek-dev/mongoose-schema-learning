//Level 12 – Multi-level nested objects and arrays
const document = {
  username: "vivek123",
  profile: {
    bio: "Developer",
    social: {
      github: "vivek",
      linkedin: "vivek123",
    },
    posts: [
      {
        caption: "Hello",
        likes: 10,
        comments: [{ user: "Alice", message: "Great post!" }],
      },
    ],
  },
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  username: {
    type: String,
    default: "",
  },
  profile: {
    type: {
      bio: { type: String, default: "" },
      social: {
        type: {
          github: { type: String, default: "" },
          linkedin: { type: String, default: "" },
        },
        default: () => ({}),
      },
      posts: {
        type: [
          {
            caption: { type: String, default: "" },
            likes: { type: Number, default: 0 },
            comments: {
              type: [
                {
                  user: { type: String, default: "" },
                  message: { type: String, default: "" },
                },
              ],
              default: () => [],
            },
          },
        ],
        default: () => [],
      },
    },
    default: () => ({}),
  },
});
