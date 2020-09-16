/*
 * node-scp-sshpass
 * <elcascarudo.dev@gmail.com>
 */
var exec = require('child_process').exec;

var scp = module.exports = {};

/*
 * Transferir archivo al servidor
 */
scp.send =  (parametros, cb) => {
  var command = [
    'sshpass',
    '-p',
    parametros.password,
    'scp',
    '-r',
    '-P',
    (parametros.port == undefined ? '22' : parametros.port),
    parametros.file,
    (parametros.user == undefined ? '' : parametros.user+'@') + parametros.host + ':' + parametros.path,
  ];

  exec(command.join(' '), function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}

/*
 * Traer archivos del servidor
 */
scp.get = (parametros, cb) => {
  var command = [
    'sshpass',
    '-p',
    parametros.password,
    'scp',
    '-r',
    '-P',
    (parametros.port == undefined ? '22' : parametros.port),
    (parametros.user == undefined ? '' : parametros.user+'@') + parametros.host + ':' + parametros.file,
    parametros.path
  ];

  exec(command.join(' '), function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}
