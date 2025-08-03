// Relación uno a uno (1:1): usuarios <--> direccion
var usuarios = {
  nombre: 'Raquel',
  apellido: 'Dominguez',
  edad: 27,
  correo: 'raquel@example.com',
  direccionPostal: {
    calle: 'calle',
    ciudad: 'ciudad',
    estado: 'estado',
    codigoPostal: 1,
    numeroExt: 10
  }
}

db.users.insertOne(usuarios)

// Relación uno a muchos: 1:N autor <--> libros
//1.- Lista
var autor = {
  nombre: 'Stephen King',
  nacionalidad: 'Estadounidense',
  libros: [
    {
      titulo: 'it',
      fechaLanzamiento: 1986
    },
    {
      titulo: 'El resplandor',
      fechaLanzamiento: 1977
    },
    {
      titulo: 'Mysery',
      fechaLanzamiento: 1987
    }
  ]
}

// 2. LLaves foraneas -> ObjectsId

var autor = {
  nombre: 'Stephen King',
  nacionalidad: 'Estadounidense'
}

db.autores.insertOne(autor)
// ObjectId('688feeb10e306a0ba9a5a2f9')

var libro1 = {
  titulo: 'it',
  fechaLanzamiento: 1986,
  autor_id: ObjectId('688feeb10e306a0ba9a5a2f9') //llave foranea
}

var libro2 = {
  titulo: 'El resplandor',
  fechaLanzamiento: 1977,
  autor_id: ObjectId('688feeb10e306a0ba9a5a2f9') //llave foranea
}

var libro3 = {
  titulo: 'Mysery',
  fechaLanzamiento: 1987,
  autor_id: ObjectId('688feeb10e306a0ba9a5a2f9') //llave foranea
}

// Crear indices
db.users.createIndex(
  {
    autor_id: 1
  }
)

// $lookup -> join
// Obtener todos los autores con su correspondiente listado de libros

db.autores.aggregate(
  [
    {
      $lookup: {
        from: 'libros',
        localField: '_id',
        foreignField: 'autor_id',
        as: 'listadoLibros'
      }
    }
  ]
)

// Obtener todos los autores que posean por lo menos un libro

db.autores.aggregate(
  [
    {
      $lookup: {
        from: 'libros',
        localField: '_id',
        foreignField: 'autor_id',
        as: 'listadoLibros'
      }
    },
    {
      $match: {
        listadoLibros: {
          $ne: []
        }
      }
    },
    {
      $project: {
        _id: false,
        nombre: true
      }
    }
  ]
)

// $unwind
db.autores.aggregate(
  [
    {
      $lookup: {
        from: 'libros',
        localField: '_id',
        foreignField: 'autor_id',
        as: 'listadoLibros'
      }
    },
    {
      $unwind: '$listadoLibros'
    },
    {
      $project: {
        _id: false,
        nombre: true,
        libro: '$listadoLibros'
      }
    }
  ]
)

db.autores.find(
  {
    nombre: 'Stephen King'
  }
).explain('executionStats')