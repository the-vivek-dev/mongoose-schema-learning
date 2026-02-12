//Level 16 – E-commerce Product Catalog
const document = {
  storeName: "TechStore",
  products: [
    {
      productName: "Laptop",
      price: 75000,
      inStock: true,
      brand: {
        name: "Dell",
        country: "USA",
      },
      categories: ["Electronics", "Computers"],
      specifications: {
        ram: "16GB",
        storage: "512GB SSD",
        color: "Silver",
      },
      reviews: [{ user: "Alice", rating: 5, comment: "Great laptop!" }],
    },
    {
      productName: "Smartphone",
      price: 45000,
      inStock: false,
      brand: {
        name: "Samsung",
        country: "Korea",
      },
      categories: ["Electronics", "Mobile"],
      specifications: {
        ram: "8GB",
        storage: "128GB",
        color: "Black",
      },
      reviews: [],
    },
  ],
};
//-----------------------------------------------------------------
const schema = new mongoose.Schema({
  storeName: {
    type: String,
    default: "",
  },
  products: {
    type: [
      {
        productName: {
          type: String,
          default: "",
        },
        price: {
          type: Number,
          default: 0,
        },
        inStock: {
          type: Boolean,
          default: false,
        },
        brand: {
          type: {
            name: {
              type: String,
              default: "",
            },
            country: {
              type: String,
              default: "",
            },
          },
          default: () => ({}),
        },
        categories: {
          type: [String],
          default: () => [],
        },
        specifications: {
          type: {
            ram: {
              type: String,
              default: "",
            },
            storage: {
              type: String,
              default: "",
            },
            color: {
              type: String,
              default: "",
            },
          },
          default: () => ({}),
        },
        reviews: {
          type: [
            {
              user: { type: String, default: "" },
              rating: { type: Number, default: 0 },
              comment: { type: String, default: "" },
            },
          ],
          default: () => [],
        },
      },
    ],
    default: () => [],
  },
});
