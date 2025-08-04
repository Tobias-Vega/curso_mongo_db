from config import URL
from pymongo import MongoClient
from functions import get_user, create_user, update_user, delete_user, default

if __name__ == '__main__':
  print('Hola mundo, desde el taller de MongoDB!')
  client = MongoClient(URL)
  database = client['cursoMongoDB']
  collection = database['users']

  options = {
    'a': create_user,
    'b': get_user,
    'c': delete_user,
    'd': update_user
  }

  while True:

    for key, function in options.items():
      print(function.__doc__)

    option = input('Selecciona una opción: ').lower()

    if option == 'q' or option == 'quit':
      print('Saliendo del programa...')
      break

    function_selected = options.get(option, default)
    function_selected(collection)