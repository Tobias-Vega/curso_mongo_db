// Actualizar un documento

db.users.updateOne(
  {
    name: 'Rafael'
  },
  {
    $set: {
      age: 26,
      support: false
    }
  }
)

// Actualizar más de un documento

db.users.updateMany(
  {
    age: { $lt: 25 }
  },
  {
    $set: { support: true }
  }
)