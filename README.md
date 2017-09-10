# Creando API REST con NodeJS y MongoDB

## Instalar express
En la terminal escribimos:
```
npm init
```
enter en todos los campos y completamos los campos autor y licencia MIT
genera un archivo **package.json** con la información suministrada

Crear el archivo .gitignore y escribir:
```
# dependencies
/node_modules
```

Ahora instalar express nos facilita el desarrollo para las peticiones http:
```
npm install express --save
```

Creamos el archivo **index.js** , es el punto de entrada de la aplicacion, importamos express y creamos un servidor
para correrlo en consola:
```
node index.js
```
Instalando body-parser y nodemon::
```
npm i -S body-parser
```
Permite que cuando hagamos peticiones rest se pueda parsear el cuerpo de la peticion podamos recoger los datos, por ejemplo ingresarlos a una bd, Funciona como middleware

importamos el bodyParser
y permitimos q express lo use
Porbamos

instalalos nodemon para que no tengamos q reiniciar el servidor manualmente,  se instala en devDependencies del  package.json
```
npm i -D nodemon
```
para usarlos en script del **package.json**
colocar :
```
"start": "nodemon index.js",
```
y en la consola:
```
npm start
```

## Metodos HTTP y codigos de respuesta utilizados en la API REST::

para q el api sea restfull
get
post
delete
put

__***GET***__
pedimos datos al servidor
pedimos la url
GET url y el servidor responde con los datos q necesite

__***POST***__
enviamos datos al servidor
los datos viajan en el cuerpo del mensaje
en el servidor accedemos al cuerpo de la peticion

__***DELETE***__
una peticion para borrar un recurso

__***PUT***__
hacer una actualizacion de un recurso

## Los codigos de respuesta son los q devuelve el servidor
1xx informativas
2xx ok
3xx Redireccion
4xx error causado por el cliente
5xx error causado por el servidor


## Cómo instalar MongoDB y utilizar Mongoose como ODM
descargar e instalar mongodb
```
npm i -S mongoose
```
Antes crear dos carpetas:
```
D:\data\db
```
arrancar mongo en consola escribe:
```
mongod
```
en otra terminal ecribir:
```
mongo
```
 y ya estariamos en la shell de mongo

## REFACTORIZACION
 separamos en diferentes carpetas
 index.js -> Pedir la informacion, se conecta a la BD y pone a escuchar nuestro servidor de express usa config.js
 config.js -> Tiene un objecto js que tiene datos del puerto y servidor de bd
 app.js -> tiene la configuracion de express usamos el modulo api que esta en Routes/index.js
 routers/index.js -> Tenemos las rutas y usamos un router de express usamos controllers/product.js
 controllers/product.js -> Los controladores que son las funciones que se comunican con node y la BD llaman a el modelo
 del producto models/product.js
 models/product.js -> tiene la definicion del modelo
