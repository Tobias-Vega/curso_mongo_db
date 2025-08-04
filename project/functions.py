import os

def clear_system(function):
  def wrap(*args, **kwargs):
    os.system('clear')
    result = function(*args, **kwargs)
    input('')
    os.system('clear')

  wrap.__doc__ = function.__doc__
  return wrap

@clear_system
def create_user(collection):
  """ A) Crear un usuario"""
  username = input('Username: ')
  edad = input('Edad: ')
  email = input('Email: ')

  # Documento -> Json -> dict
  user = dict(username=username, edad=edad, email=email)

  direccion = input('¿Deseas añadir una dirección? (s/n): ').lower()

  if direccion == 's':
    user['direccion'] = get_addres()

  collection.insert_one(user)

  print(f'Usuario {username} creado con éxito!')

  return user

def get_addres():
  calle = input('Calle: ')
  ciudad = input('Ciudad: ')
  estado = input('Estado: ')
  codigo_postal = input('Código Postal: ')

  direccion = dict(
    calle=calle,
    ciudad=ciudad,
    estado=estado,
    codigo_postal=codigo_postal
  )

  return direccion

@clear_system
def get_user(collection):
  """ B) Obtener un usuario"""
  username = input('Username: ')
  user = collection.find_one(
    {
      'username': username
    },
    {
      '_id': False
    }
  )

  if user:
    print(f'Usuario encontrado: {user}')
    return user
  else:
    print(f'Usuario {username} no encontrado.')

@clear_system
def delete_user(collection):
  """ C) Eliminar un usuario"""
  username = input('Username: ')

  collection.delete_one(
    {
      'username': username
    }
  )

  print(f'Usuario {username} eliminado con éxito!')

@clear_system
def update_user(collection):
  """ D) Actualizar un usuario"""
  username = input('Username: ')
  user = collection.find_one({'username': username})

  if not user:
    print(f'Usuario {username} no encontrado.')
    return
  
  print(f'Usuario encontrado: {user}')

  edad = input('Nueva Edad: ')
  email = input('Nuevo Email: ')

  user['edad'] = edad
  user['email'] = email

  direccion = input('¿Deseas actualizar la dirección? (s/n): ').lower()
  if direccion == 's':
    user['direccion'] = get_addres()

  collection.update_one(
    {'username': username},
    {'$set': user}
  )

  print(f'Usuario {username} actualizado con éxito!')

def default(*args, **kwargs):
  print("Opción no válida. Por favor, selecciona una opción válida.")