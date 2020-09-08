const argv = require('./config/yargs').argv;
const colors = require('colors');
// requireds 3 tipos:
//const fs = require('fs'); // los por default de node
// const fs = require('express); librerias hechas por otros usuarios
// const fs = require(./fs); archivos hechos por nosotros mismos
//const multiplicar = require('./multiplicar/multiplicar');
//destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${ colors.green(archivo) }`);
        }).catch(err => {
            console.log(err);
        });
        break;

    default:
        console.log('comando no reconocido');
        break;
}

//console.log(argv);



//let base = '5';
//console.log(process.argv);
//let argv2 = process.argv;
//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];


/*crearArchivo(base).then(archivo => {
    console.log(`Archivo creado: ${ archivo }`);
}).catch(err => {
    console.log(err);
}); */