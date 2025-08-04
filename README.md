# Proyecto CRUD en MongoDB con Python

Este proyecto es un ejemplo de cómo crear una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) utilizando MongoDB en Atlas como base de datos y Python como lenguaje de programación.

## Requisitos
- Python 3.x
- Una cuenta en MongoDB Atlas
- Un cluster de MongoDB creado en Atlas


## Pasos para ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Tobias-Vega/curso_mongo_db
   cd curso_mongo_db
   ```

2. Crea un entorno virtual:
   ```bash
   python -m venv venv
   ```

3. Activa el entorno virtual:
   - En Windows:
     ```bash
     venv\Scripts\activate
     ```
   - En macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

5. Configura tu conexión a MongoDB Atlas:
   - Crea un archivo `.env` en la raíz del proyecto y agrega tu URI de conexión:
     ```
     MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/<nombre_base_datos>?retryWrites=true&w=majority
     ```

6. Ejecuta la aplicación:
   ```bash
   python main.py
   ```