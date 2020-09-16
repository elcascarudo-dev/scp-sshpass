#SCP - sshpass

``` 
IMPORTANTE: Se tiene que tenes instalado "sshpass" para que el paquete funcione correctamente
``` 

### Instalacion 

```
npm install scp-sshpass --save
```

### Como utilizar el paquete

#### Copiar archivo al servidor

```javascript
var scp = require('scp-sshpass');
 
var options = {
  password: 'contraseña',
  file: 'archivo-a-copiar',
  user: 'usuario',
  host: 'host',
  port: '22',
  path: 'ruta-destino'
}
 
scp.send(options, function (err) {

  if (err) {
    console.log(err)
  } else {
    console.log('Se termino el copiado de archivos.')
  }

});

```

#### Copiar archivo desde el servidor

```javascript
var scp = require('scp-sshpass');
 
var options = {
  password: 'contraseña',
  file: 'archivo-a-copiar',
  user: 'usuario',
  host: 'host',
  port: '22',
  path: 'ruta-destino'
}
 
scp.get(options, function (err) {

  if (err) {
    console.log(err)
  } else {
    console.log('Se termino el copiado de archivos')
  }

});

```
