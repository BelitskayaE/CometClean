let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');

var codedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.get('/app*', function (req, res) {
        res.sendFile(path.join(__base, '/app/ngApp/dist/index.html'));
    });

    //get Data
    app.post('/api/postUserInfo', function(req, res){
        var content = fs.readFileSync(path.join(__base, '/app/backend/users/users.json'));
        var users = JSON.parse(content);
        res.cookie('Test', 'Testing');
        console.log(req.body.cookieLogin);//why is it undefined?
        var user;
        for (let i=0; i < users.length; i++){
            if (req.body.cookieLogin === users[i].login){
                user = JSON.stringify(users[i]);
                console.log('hi');
                user = JSON.parse(user);
                break;
            }
        }
        console.log(user);
        //res.send(user);
        }
    );
    //check if user and his password is true
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

    app.post('/app/authUser', codedParser, function(req,res){
        //console.log(req.body);
        res.redirect(200,'/app');
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