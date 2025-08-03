// Actualizar por indice

db.users.updateMany(
  {
    scores: {
      $exists: true
    }
  },
  {
    $set: {
      'scores.0': 5
    }
  }
)

db.users.updateMany(
  {
    scores: {
      $exists: true
    },
    scores: 9
  },
  {
    $set: {
      'scores.$': 6
    }
  }
)