// aggregate([ tareas ])

db.users.find(
  {
    age: {
      $gt: 25
    }
  }
)


// $slice $arrayElemAt
db.users.aggregate(
  [
    {
      $match: {
        age: {
          $gt: 25
        }
      }
    },
    {
      $match: {
        courses: {
          $exists: true
        }
      }
    },
    {
      $project: {
        _id: false,
        name: true,
        courses: true
      }
    },
    {
      $project: {
        name: true,
        firstsCourses: {
          $slice: ['$courses', 2]
        }
      }
    },
    {
      $project: {
        name: true,
        course: {
          $arrayElemAt: ['$firstsCourses', 0]
        }
      }
    },
    {
      $addFields: {
        currentDate: new Date()
      }
    }
  ]
)

// $set
db.users.aggregate(
  {
    $match: {
      scores: {
        $exists: true
      }
    }
  },
  {
    $project: {
      _id: false,
      name: true,
      scores: true
    }
  },
  {
    $set: {
      sum: {
        $sum: '$scores'
      }
    }
  },
  {
    $set: {
      avg: {
        $avg: '$scores'
      }
    }
  },
  {
    $match: {
      avg: {
        $gt: 7
      }
    }
  }
)

db.users.aggregate(
  [
    {
      $match: {
        $and: [
          {
            name: {
              $exists: true
            }
          },
          {
            lastName: {
              $exists: true
            }
          }
        ]
      }
    },
    {
      $project: {
        _id: false,
        name: true,
        lastName: true
      }
    },
    {
      $project: {
        fullName: {
          $concat: ['$name', ' ', '$lastName']
        }
      }
    }
  ]
)

// $group
// Agrupar y contar la cantidad de items con respecto a su tipo

db.items.aggregate(
  [
    {
      $group: {
        _id: '$type',
        total: {
          $sum: 1
        }
      }
    },
    { // HAVING
      $match: {
        total: {
          $gt: 1
        }
      }
    }
  ]
)

// $limit y $sort
// Obtener al usuario más joven

db.users.aggregate(
  [
    {
      $sort: {
        age: 1
      }
    },
    {
      $limit: 1
    },
    {
      $project: {
        _id: false,
        name: true,
        age: true
      }
    }
  ]
)

// $map

db.users.aggregate(
  [
    {
      $match: {
        scores: {
          $exists: true
        }
      }
    },
    {
      $project: {
        _id: false,
        name: true,
        scores: true
      }
    },
    {
      $project: {
        name: true,
        scores: true,
        newListScores: {
          $map: {
            input: '$scores',
            as: 'calificacion',
            in: {
              $multiply: ['$$calificacion', 10]
            }
          }
        }
      }
    }
  ]
)

db.users.aggregate(
  [
    {
      $match: {
      courses: {
        $exists: true
      }
      }
    },
    {
      $project: {
        _id: false,
        name: true,
        courses: true
      }
    },
    {
      $project: {
        newList: {
          $map: {
            input: '$courses',
            as: 'course',
            in: {
              $multiply: ['$$course.progress', 10]
            }
          }
        }
      }
    }
  ]
)