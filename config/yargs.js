const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Numero de la base'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Listar los numeros a multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    default: 10,
                    describe: 'Numero hasta el cual se multiplica'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .argv;

module.exports = argv;