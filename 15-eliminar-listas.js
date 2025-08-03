// $pull

db.users.updateMany(
  {
    courses: {
      $exists: true
    }
  },
  {
    $pull: {
      courses: 'Python'
    }
  }
)

// $pull $in

db.users.updateMany(
  {
    courses: {
      $exists: true
    }
  },
  {
    $pull: {
      courses: {
        $in: ['Base de Datos', 'C#']
      }
    }
  }
)

// $pop
db.users.updateMany(
  {
    scores: {
      $exists: true
    }
  },
  {
    $pop: {
      scores: 1 // -1 Elimina el primer elemento // 1 Elimina el último elemento
    }
  }
)

db.users.updateMany(
  {
    scores: {
      $exists: true
    }
  }
)