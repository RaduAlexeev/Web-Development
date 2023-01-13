class Database {
    _url;
    _port;
    _username;
    _password;
    _tables;

    constructor(url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = []
    }

    createNewTable(table) {
        this._tables.push(table)
    }

    clearTables() {
        this._tables = []
    }

    // url
    get url() {
        return this._url;
    }

    // port
    get port() {
        return this._port;
    }

    // username
    get username() {
        return this._username;
    }

    // password
    get password() {
        return this._password;
    }

    // tables
    get tables() {
        return this._tables;
    }
   
}

const db = new Database(1, 2, 3, 4)
// db.tables = [] - не сработает
db.createNewTable({name: 'roles'})
db.createNewTable({name: 'users'})
console.log(db.tables)
db.clearTables()
console.log(db.tables)