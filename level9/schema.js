//Level 9 – Deep nested objects
const document = {
  name: "Vivek Kumar",
  profile: {
    bio: "Full Stack Developer",
    contact: {
      email: "vivek@gmail.com",
      phone: "1234567890",
    },
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
      contact: {
        type: {
          email: {
            type: String,
            default: "",
          },
          phone: {
            type: String,
            default: "",
          },
        },
        default: () => ({}),
      },
    },
    default: () => ({}),
  },
});
