// Level 17 – Company HR System
const document = {
  companyName: "TechCorp",
  foundedYear: 2005,
  departments: [
    {
      name: "Engineering",
      budget: 500000,
      employees: [
        {
          name: "Vivek",
          age: 23,
          skills: ["Node", "React"],
          address: { city: "Darbhanga", pincode: 846001 },
        },
        {
          name: "Alice",
          age: 28,
          skills: ["Java", "Spring"],
          address: { city: "Bangalore", pincode: 560001 },
        },
      ],
    },
    {
      name: "HR",
      budget: 200000,
      employees: [{ name: "Bob", age: 32, skills: ["Recruitment"] }],
    },
  ],
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  companyName: {
    type: String,
    default: "",
  },
  foundedYear: {
    type: Number,
    default: 0,
  },
  departments: {
    type: [
      {
        name: {
          type: String,
          default: "",
        },
        budget: {
          type: Number,
          default: 0,
        },
        employees: {
          type: [
            {
              name: { type: String, default: "" },
              age: { type: Number, default: 0 },
              skills: { type: [String], default: () => [] },
              address: {
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
            },
          ],
          default: () => [],
        },
      },
      {
        name: { type: String, default: "" },
        budget: { type: Number, default: 0 },
        employees: {
          type: [
            {
              name: { type: String, default: "" },
              age: { type: Number, default: 0 },
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
