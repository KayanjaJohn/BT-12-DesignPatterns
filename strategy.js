/*
    Feature:
        - Implementing the Login feature,
            - User can log in using one of the following methods:
                - Basic Authedntication (username, password)
                - email authentication (email, password)
                - UID authentication (userid, password)
                - social authentication (facebook, twitter)
                - Json Web Tokens (jwt token)
*/
// Algorithms [Implementations of the Strategy]
var BasicAuthentication = /** @class */ (function () {
    function BasicAuthentication() {
    }
    BasicAuthentication.prototype.authenticate = function (credentials) {
        var username = credentials.username;
        var password = credentials.password;
        console.log("User loggedin with username: ".concat(username, " and password: ").concat(password));
    };
    return BasicAuthentication;
}());
var EmailAuthentication = /** @class */ (function () {
    function EmailAuthentication() {
    }
    EmailAuthentication.prototype.authenticate = function (credentials) {
        var email = credentials.email;
        var password = credentials.password;
        console.log("User loggedin with email: ".concat(email, " and password: ").concat(password));
    };
    return EmailAuthentication;
}());
var UserIdAuthentication = /** @class */ (function () {
    function UserIdAuthentication() {
    }
    UserIdAuthentication.prototype.authenticate = function (credentials) {
        var id = credentials.id;
        var password = credentials.password;
        console.log("User loggedin with id: ".concat(id, " and password: ").concat(password));
    };
    return UserIdAuthentication;
}());
var UniqueNoAuthentication = /** @class */ (function () {
    function UniqueNoAuthentication() {
    }
    UniqueNoAuthentication.prototype.authenticate = function (credentials) {
        var uniqueNo = credentials.uniqueNo;
        var password = credentials.password;
        console.log("User loggedin with uniqueNo: ".concat(uniqueNo, " and password: ").concat(password));
    };
    return UniqueNoAuthentication;
}());
// The Context Class
var Computer = /** @class */ (function () {
    // Dependancy Inversion and Injection
    function Computer(authentication) {
        this.authentication = authentication;
    }
    // Target method in the context class
    Computer.prototype.authenticate = function (credentials) {
        // Delegation Principle
        this.authentication.authenticate(credentials);
    };
    Computer.prototype.setAuthentication = function (authentication) {
        this.authentication = authentication;
    };
    return Computer;
}());
// Client
function client() {
    var computer = new Computer(new BasicAuthentication());
    computer.authenticate({ username: 'Jones', password: 'jons256' });
    computer.setAuthentication(new EmailAuthentication());
    computer.authenticate({ email: 'jons@gmail.com', password: '00jons09' });
    computer.setAuthentication(new UserIdAuthentication());
    computer.authenticate({ id: 'DF123VFG', password: '12345' });
    computer.setAuthentication(new UniqueNoAuthentication());
    computer.authenticate({ uniqueNo: 'A0010', password: '20000' });
}
client();
