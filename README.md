# MAEDRE

## DESCRIPCION DE MI PROYECTO:

Mi proyecto va a consistir en crear una pagina de venta de ropa para una empresa ficticia llamada "Maedre", donde se venden buzos camperas y remeras

En el sitio se pueden ver diferentes productos y tambien filtrar por categorias. Una vez se elija un producto, el usuario puede acceder a su descripcion y comprar 1 o mas productos del mismo

Se pueden agregar y eliminar productos del carrito, vaciar el carrito, y una vez agregados los productos que desea comprar, realizar la compra, para la cual se le pediran ciertos datos al usuario. Una vez ingresados estos datos confirama la compra; y la orden de compra con todos los productos que agregó al carrito y sus datos se subiran a una base de datos.

## INSTALACIÓN Y USO

Descargar el repositorio en formato .zip y extraer la carpeta del proyecto con sus archivos dentro

Abrir una terminal y pararse en la carpeta del proyecto(puede abrir la carpeta con un editor de texto como Visual Studio Code, abrir un terminal desde ahí)

Todos los programas a instalar estan detallados en el archivo package.json. Por lo tanto lo unico que hay q hacer para arrancar la página es pararse en la carpeta del proyecto (si es necesario escribir en la terminal -cd "nombre de la carpeta"-)y escribir tambien en la terminal -npm i- para crear la carpeta -node_modules- con todos los archivos necesarios

Para ver e interactuar con el sitio web, escribir en la terminal -npm start- (parado en la carpeta del proyecto).

## TECNOLOGÍAS UTILIZADAS

### Para el sitio se utilizaron las siguientes tecnologias y se instalaron todas desde la consola(sin el signo $):

-React.     $npx create-react-app app. La base de toda aplicacion React. Uso: useState, useEffect, createContext, useContext.

-Sass.      $npm install node-sass. Se crea un archivo .scss y lo importo en el index.js usando import './style.scss'

-Router.    $npm install react-router-dom. Para poder navegar en el sitio web. Uso: Link, NavLink, BrowserRouter, Routes, Route, useParams, useNavigate

-Toastify.  $npm install --save react-toastify. Libreria que permite hacer un tipo de "alert" en el sitio. Lo uso cuando el usuario quiere realizar la compra(ya sea de forma exitosa o erronea)

-Firebase.  $npm install firebase. Para acceder a los productos en venta y para guardar las ordenes de compra
