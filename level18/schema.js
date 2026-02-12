// Level 18 – Social Media Platform
const document = {
  username: "vivek123",
  profile: {
    bio: "Full Stack Developer",
    website: "vivek.dev",
    location: "Bihar",
  },
  followers: ["Alice", "Bob", "Charlie"],
  posts: [
    {
      caption: "Hello World",
      imageUrl: "url1",
      likes: ["Alice", "Bob"],
      comments: [
        { user: "Charlie", message: "Great post!", createdAt: "2026-02-12" },
      ],
    },
    {
      caption: "Learning MongoDB",
      imageUrl: "url2",
      likes: ["Bob"],
      comments: [],
    },
  ],
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
      website: { type: String, default: "" },
      location: { type: String, default: "" },
    },
    default: () => ({}),
  },
  followers: {
    type: [String],
    default: () => [],
  },
  posts: {
    type: [
      {
        caption: { type: String, default: "" },
        imageUrl: { type: String, default: "" },
        likes: { type: [String], default: () => [] },
        comments: {
          type: [
            {
              user: { type: String, default: "" },
              message: { type: String, default: "" },
              createdAt: { type: String, default: "" },
            },
          ],
          default: () => [],
        },
      },
      {
        caption: {
          type: String,
          default: "",
        },
        imageUrl: {
          type: String,
          default: "",
        },
        likes: {
          type: [String],
          default: () => [],
        },
        comments: {
          type: [],
          default: () => [],
        },
      },
    ],
    default: () => [],
  },
});
