    var prod = {
    DB: {
        host: '',
        port: 3306,
        user: '',
        password: '',
        database: '',
        connectionLimit: 20,
        acquireTimeout: 100000,
        multipleStatements: true
    }
};

var dev = {
    DB: {
        host: '',
        port: 3306,
        user: '',
        password: '',
        database: '',
        connectionLimit: 20,
        acquireTimeout: 100000,
        multipleStatements: true
    }
};

var local = {
    DB: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'test',
        connectionLimit: 20,
        acquireTimeout: 1000,
        multipleStatements: true
    }
};

module.exports.ENV_CONFIG = local;
