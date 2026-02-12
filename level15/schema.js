//Level 15 – Social media complex

const document = {
  username: "vivek123",
  profile: {
    bio: "Full Stack Developer",
    website: "vivek.dev",
  },
  posts: [
    {
      caption: "Hello World",
      likes: ["Alice", "Bob"],
      comments: [{ user: "Charlie", message: "Nice post!" }],
    },
  ],
  followers: ["Alice", "Bob", "Charlie"],
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  username: {
    type: String,
    default: "",
  },
  profile: {
    type: {
      bio: {
        type: String,
        default: "",
      },
      website: {
        type: String,
        default: "",
      },
    },
    default: () => ({}),
  },
  posts: {
    type: [
      {
        caption: {
          type: String,
          default: "",
        },
        likes: {
          type: [String],
          default: () => [],
        },
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
  followers: {
    type: [String],
    default: () => [],
  },
});
