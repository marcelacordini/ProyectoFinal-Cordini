# Ecommerce con React.js

- Curso: React Js Flex
- Comisión: 60745
- Profesor: Andrés Pujol
- Tutor: Andrés Nazzari
- Alumno: Marcela Cordini
- Fecha: 15/05/2024

## Trabajo Final

GitHub: https://github.com/marcelacordini/ProyectoFinal-Cordini

![Gif mostrando la navegación]: https://www.loom.com/share/a678dcbe870943cb87a7a71cecb50ae0?sid=7b032d2f-e82c-4402-98ce-016d56b66db3


## Creado con

- [React.js](https://react.dev/)
- Base de datos: [Firebase](https://firebase.google.com/)
- Build tool: [Vite](https://vitejs.dev/)

## Ejecutar la aplicación

Una vez instaladas las dependencias, y ejecutada la app estará disponible en el [http://localhost:5173](http://localhost:5173) (o un puerto alternativo)

<hr />

## Manual de Usuario

La APP consiste en un e-commerce para un local expendedor de café al paso. 
Permite filtrar por categoría, discriminando entre Expreso, Americano y Especiales.
Una vez seleccionado el café se podrá acceder al detalle para agregar el mismo al carrito, de acuerdo a las cantidades deseadas.
El stock lo toma de la base de datos y también lo actualiza una vez realizado el check out.
En caso de no haber más stock no podrá agregar el producto al carrito.
En caso de acceder al carrito sin haber realizado la compra le advierte al usuario que el mismo está vacío y lo devuelve al inicio.
Para realizar el check out se exige Nombre, mail, repetición de mail (los que deberán coincidir) y teléfono (numérico) con al menos 5 caracteres. 
Si surguiera algún error le avisa al usuario, requiriendo ese dato para poder continuar.
