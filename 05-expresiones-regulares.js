// like --> expresión regular
// Obtener todos los libros cuyo titulo comience con El
db.books.find(
  {
  title: /^El/ 
  }
)

// Obtener todos los libros cuyo tiulo finalice con s

db.books.find(
  {
    title: /s$/
  }
)

// Obtener todos los libros que posean en su titulo la palabra la

db.books.find(
  {
    title: /la/
  }
)
