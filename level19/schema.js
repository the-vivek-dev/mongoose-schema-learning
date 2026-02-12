//Level 19 – Online Learning Platform
const document= {
  courseName: "Full Stack Web Development",
  price: 15000,
  instructor: { "name": "Vivek", "experience": 3 },
  students: [
    { name: "Alice", progress: 80, completed: false },
    { name: "Bob", progress: 100, completed: true }
  ],
  reviews: [
    { user: "Charlie", rating: 5, comment: "Excellent course!" }
  ],
  modules: [
    { title: "React Basics", lessons: ["JSX", "Components", "Props"] },
    { title: "NodeJS", lessons: ["Express", "MongoDB", "REST APIs"] }
  ]
}

//-----------------------------------------------------------------
const schema = new mongoose.Schema(
{
  courseName: {
    type: String,
    default: ''
  },
  price: {
    type:Number,
    default: 0
  },
  instructor: { 
     type: {
      name: {type: String, default: ''},
     experience: {type: Number, default: 0}
     },
     default: () => ({})
     },
  students: {
    type: [
    { 
      name: {type: String, default: ''},
       progress: {type: Number, default: 0},
        completed: {type: Boolean, default: false}
      },
    { 
      name: {type: String, default: ''},
     progress: {type: Number, default: 0},
      completed: {type: Boolean, default: false}
     }
  ],
  default: () => []
  },
  reviews: {
    type: [
    {
       user: {type: String, default: ''}, 
      rating: {type: Number, default: 0}, 
      comment: {type: String, default: ''} 
    }
  ],
  default: () => []
  },
  modules: {
    type: [
    {
       title: {type: String, default: ''}, 
      lessons: {type: [String], default: () => []}
     },
    { 
      title: {type: String, default: ''},
       lessons: {type: [String], default: () => []}
       }
  ],
  default: () => []
  }
})