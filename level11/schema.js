//Level 11 – Complex profile with nested arrays
const document = {
  username: "vivek123",
  followers: 100,
  profile: {
    bio: "Developer",
    posts: [{ caption: "Hello", likes: 10 }],
  },
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  username: {
    type: String,
    default: "",
  },
  followers: {
    type: Number,
    default: 0,
  },
  profile: {
    type: {
      bio: {
        type: String,
        default: "",
      },
      posts: {
        type: [
          {
            caption: { type: String, default: "" },
            likes: { type: Number, default: 0 },
          },
        ],
        default: () => [],
      },
    },
    default: () => ({}),
  },
});
