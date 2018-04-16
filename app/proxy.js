let path = require('path');
let fs = require('fs');

module.exports = function (app) {
    app.get('/app*', function (req, res) {
        res.sendFile(path.join(__base, '/app/ngApp/dist/index.html'));
    });

    //get Data
    app.get('/api/json/getUserInfo', function(req, res){
        var content = fs.readFileSync(path.join(__base, '/app/backend/data/user.json'));
        var users = JSON.parse(content);
        res.send(users);

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