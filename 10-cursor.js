// count() --> Devuelve la cantidad de documentos
// Obtener todos los usuarios con correo electrónico codigofacilito

db.users.find(
  {
    email: /codigofacilito.com$/
  }
).count()

// limit --> establece un limite de documentos
// Obtener los primeros dos usuarios de la colección users

db.users.find().limit(2)

// skip() --> ignora una cantidad determinada de documentos
// Obtener el tercer usuario de la colección users
db.users.find().skip(2).limit(1)

// sort() --> ordena documentos
// Obtener el nombre de todos los usuarios ordenados alfabeticamente
db.users.find(
  {},
  {

    _id: false, name: true
  }
).sort(
  {
    name: 1
  }
)
// 1 ASC
// -1 DESC

// Obtener el tercer usuario ordenado por su nombre de forma DESC

db.users.find().sort(
  {
    name: -1
  }
).skip(2).limit(1)