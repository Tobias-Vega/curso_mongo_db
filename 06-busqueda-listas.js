// Obtener todos los usuarios cuyo nombre sea Eduardo o Uriel o Marines

db.users.find(
  {
    name: {
      $in: ['Eduardo', 'Uriel', 'Marines']
    }
  }
)

// Obtener todos los usuarios cuyo nombre no sea Eduardo o Uriel o Marines

db.users.find(
  {
    name: {
      $nin: ['Eduardo', 'Uriel', 'Marines']
    }
  }
)