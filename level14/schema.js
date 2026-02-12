//Level 14 – Deep nested arrays + objects
const document = {
  university: "ABC University",
  faculties: [
    {
      name: "Engineering",
      courses: [
        { title: "CS101", students: [{ name: "Alice" }, { name: "Bob" }] },
      ],
    },
  ],
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  university: {
    type: String,
    default: "",
  },
  faculties: {
    type: [
      {
        name: { type: String, default: "" },
        courses: {
          type: [
            {
              title: { type: String, default: "" },
              students: {
                type: [
                  { name: { type: String, default: "" } },
                  { name: { type: String, default: "" } },
                ],
                default: () => [],
              },
            },
          ],
          default: () => [],
        },
      },
    ],
    default: () => [],
  },
});
