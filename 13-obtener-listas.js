// Obtener al usuario que posea los cursos de Python, MongoDB, SQL y Java

db.users.findOne(
  {
    courses: ['Python', 'MongoDB', 'SQL', 'Java']
  }
)

db.users.findOne(
  {
    courses: {
      $eq: ['Python', 'MongoDB', 'SQL', 'Java']
    }
  }
)

// Búsqueda por elemento
// $all
// Obtener todos los usuarios que posean por curso SQL o MongoDB
db.users.find(
  {
    courses: {
      $all: ['SQL', 'MongoDB'] // and
    }
  }
)

// Obtener todos los usuarios que posean por curso SQL o Git
db.users.find(
  {
    $or: [
      {
        courses: 'SQL'
      },
      {
        courses: 'Git'
      }
    ]
  }
)

// Obtener todos los usuarios que posean por lo menor una calificación de 10
db.users.find(
  {
    scores: 10
  }
)


// Obtener todos los usuarios que hayan reprobado por lo menor una calificación
db.users.find(
  {
    scores: {
      $lt: 6
    }
  }
)