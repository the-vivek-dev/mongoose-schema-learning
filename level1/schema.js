//Level 1 – Single field, String
const document = {
  name: "Vivek Kumar",
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
});
