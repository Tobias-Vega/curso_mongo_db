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

// $inc --> incrementa valores en números enteros

db.users.updateOne(
  {
    name: 'Rafael'
  },
  {
    $inc: {
      age: 1 // puede decrementarse usando números negativos
    }
  }
)

// upsert --> actualiza el documento, si no existe lo crea

db.users.updateOne(
  {
    name: 'Luis'
  },
  {
    $set: {
      age: 27
    }
  },
  {
    upsert: true
  }
)