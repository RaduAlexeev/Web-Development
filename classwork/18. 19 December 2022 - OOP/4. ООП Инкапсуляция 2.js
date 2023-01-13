class User {
    _username;
    _password;
    _id;

    constructor(username, password) {
        this._username = username;
        this._password = password;
        this._id = generateRandomId();
    }

    // username -могут менятся
    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    // password - могут менятся
    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    // id - делаем статичным и изменятся не может
    get id() {
        return this._id;
    }

}

const user = new User('Radu', '2000-12-20')
user.id = 5; // выдаст ошибку так как мы не можем его поменять