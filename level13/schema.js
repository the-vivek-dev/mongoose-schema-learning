//Level 13 – Real-world nested example
const document = {
  companyName: "TechCorp",
  headOffice: {
    city: "Bangalore",
    pincode: 560001,
  },
  departments: [
    {
      name: "Engineering",
      employees: [{ name: "Alice", skills: ["Node", "React"] }],
    },
  ],
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  companyName: {
    type: String,
    default: "",
  },
  headOffice: {
    type: {
      city: {
        type: String,
        default: "",
      },
      pincode: {
        type: Number,
        default: 0,
      },
    },
    default: () => ({}),
  },
  departments: {
    type: [
      {
        name: {
          type: String,
          default: "",
        },
        employees: {
          type: [
            {
              name: { type: String, default: "" },
              skills: { type: [String], default: () => [] },
            },
          ],
          default: () => [],
        },
      },
    ],
    default: () => [],
  },
});
