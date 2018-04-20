let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
var codedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.get('/app*', function (req, res) {
        res.sendFile(path.join(__base, '/app/ngApp/dist/index.html'));
    });

    //get Data
    app.get('/getUserInfo', function(req, res){
        var content = fs.readFileSync(path.join(__base, '/app/backend/data/user.json'));
        var user = JSON.parse(content);
        //console.log(user[0]);
        res.send(user);
        }
    );

    app.post('/login_user', codedParser, function(req, res){
        //console.log(req.body.login);
        var content = fs.readFileSync(path.join(__base, '/app/backend/access/access.json'));
        var users = JSON.parse(content);
        console.log(users);
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