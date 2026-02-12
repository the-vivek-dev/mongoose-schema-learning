//Level 20 – Enterprise Resource Planning (ERP) System
const document = {
  erpName: "MegaERP",
  modules: [
    {
      name: "Sales",
      teams: [
        {
          teamName: "Domestic",
          members: [
            { name: "Alice", role: "Sales Manager", targets: [10000, 12000] },
            { name: "Bob", role: "Sales Executive", targets: [5000, 7000] },
          ],
        },
        {
          teamName: "International",
          members: [
            { name: "Charlie", role: "Sales Manager", targets: [15000, 18000] },
          ],
        },
      ],
    },
    {
      name: "HR",
      teams: [
        {
          teamName: "Recruitment",
          members: [
            { name: "David", role: "Recruiter", hired: 25 },
            { name: "Eve", role: "Recruiter", hired: 30 },
          ],
        },
      ],
    },
  ],
  admin: { username: "admin", password: "encrypted" },
};

//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  erpName: { type: String, default: "" },
  modules: {
    type: [
      {
        name: { type: String, default: "" },
        teams: {
          type: [
            {
              teamName: { type: String, default: "" },
              members: {
                type: [
                  {
                    name: { type: String, default: "" },
                    role: { type: String, default: "" },
                    targets: {
                      type: [Number],
                      default: () => [],
                    },
                  },
                  {
                    name: { type: String, default: "" },
                    role: { type: String, default: "" },
                    targets: {
                      type: [Number],
                      default: () => [],
                    },
                  },
                ],
                default: () => [],
              },
            },
            {
              teamName: { type: String, default: "" },
              members: {
                type: [
                  {
                    name: { type: String, default: "" },
                    role: { type: String, default: "" },
                    targets: { type: [Number], default: () => [] },
                  },
                ],
                default: () => [],
              },
            },
          ],
          default: () => [],
        },
      },
      {
        name: { type: String, default: "" },
        teams: [
          {
            teamName: { type: String, default: "" },
            members: {
              type: [
                {
                  name: { type: String, default: "" },
                  role: { type: String, default: "" },
                  hired: { type: Number, default: 0 },
                },
              ],
              default: () => [],
            },
          },
        ],
      },
    ],
    default: () => [],
  },
  admin: {
    type: {
      username: { type: String, default: "" },
      password: { type: String, default: "" },
    },
    default: () => ({}),
  },
});
