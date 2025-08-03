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
    support: {
      $exists: false
    }
  },
  {
    $set: { support: false }
  }
)

// Actualizar el documento support a true con el nombre de Fernando

db.users.updateOne(
  {
    name: 'Fernando'
  },
  {
    $set: {
      support: true
    }
  }
)

// $unset --> elimina uno o varios atributos

db.users.updateOne(
  {
    createdAt: { $exists: true }
  },
  {
    $unset: {
      createdAt: true
    }
  }
)