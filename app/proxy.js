let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let coolieParser = require('cookie-parser');//not nes, because it is in server.js

var codedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.get('/app*', function (req, res) {
        res.sendFile(path.join(__base, '/app/ngApp/dist/index.html'));
    });

    app.post('/api/registration', function(req,res){
        var content = fs.readFileSync(path.join(__base, '/app/backend/users/users.json'));
        var users = JSON.parse(content);

        }
    );

    //get data about user to user-info component
    app.get('/api/getUserInfo', function(req, res){
        var content = fs.readFileSync(path.join(__base, '/app/backend/users/users.json'));
        var users = JSON.parse(content);
        var a = req.cookies.login;
        //console.log(a);//mariapoliss
        var user;
        //console.log(users[0].login);//mariapoliss
        for (let i = 0; i < users.length; i++){
            if (a.localeCompare(users[i].login) === 0){
                user = JSON.stringify(users[i]);
                user = JSON.parse(user);
                break;
            }
        }
        //console.log(user);
        res.send(user);
        }
    );
    app.get('/api/getContacts', function(req,res){
        var content = fs.readFileSync(path.join(__base, '/app/backend/contacts/contacts.json'));
        var contacts = JSON.parse(content);
        var a = req.cookies.login;
        var userContacts;
        for (let i = 0; i < contacts.length; i++){
            if (a.localeCompare(contacts[i].login) === 0){
                userContacts = JSON.stringify(contacts[i].friends);
                userContacts = JSON.parse(userContacts);
                break;
            }
        }
        //console.log(userContacts);
        var content2 = fs.readFileSync(path.join(__base, '/app/backend/users/users.json'));
        var users = JSON.parse(content2);
        //console.log(a);//mariapoliss
        var userContactsData = [];
        for (let j = 0; j < userContacts.length; j++) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].login === userContacts[j].login) {
                    userContactsData[j] = users[i].name;
                    break;
                }
            }
        }
        //console.log(userContactsData);
        res.send(userContactsData);
    }

    );




    //check if user and his password is true, returns true or false
    app.post('/api/loginUser', codedParser, function(req, res){
        //console.log(req.body.login);
        var content = fs.readFileSync(path.join(__base, '/app/backend/access/access.json'));
        var users = JSON.parse(content);
        //console.log(users);
        var check = false;
        for (let i=0; i < users.length; i++){
            if (req.body.login === users[i].login && req.body.password === users[i].password){//true login and password
                check = true;
                break;
            }
        }
        res.send(check);
        }
    );
    //does not work
    app.post('/app/authUser', codedParser, function(req,res){
        //console.log(req.body);
        //res.redirect(200,'/app');
        }
    );




    /**** Example ***
    app.post('/api/storeTestData', async (req, res) => {
        try {
            let data = await testing.storeTestData(req.body);
            res.send({status: "OK", data: data});
        } catch (error) {
            res.send(error);
        }
    });

    app.get('/api/service-poc', async (req, res) => {
        try {
            let data = await utils.getPoc(req.query);
            res.send({status: "OK", data: data});
        } catch (error) {
            res.send(error);
        }
    });
     */
};