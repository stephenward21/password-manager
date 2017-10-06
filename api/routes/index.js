var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('./config');
var bcrypt = require('bcrypt');
var randToken = require('rand-token');

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res) => {
	console.log(req.body);

	const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const password = bcrypt.hashSync(req.body.password);
    


    const checkEmail = new Promise((resolve,reject)=>{
        const checkEmailQuery = 'SELECT * FROM user WHERE email = ?';
        connection.query(checkEmailQuery,[email], (error,results)=>{
            if(error) throw error;
            if(results.length > 0){
                reject({msg: "userAlreadyExists"});
            }else{
                resolve();
            }
        })
    });
    checkEmail.then(
        ()=>{
		    var insertIntoCust = "INSERT INTO customers (name, address, city, state) VALUES (?,?,?,?)";
		    connection.query(insertIntoCust,[name,address,city,state], (error,results)=>{
		        const newID = results.insertId;
		        var token = randToken.uid(40);
		        var insertQuery = 'INSERT INTO user (email, uid, password, token) VALUES (?,?,?,?)';
		        connection.query(insertQuery, [email, newID, password, token], (error2, results2)=>{
		             console.log(results2)
		            if(error2){
		                res.json({
		                    msg: error2
		                })
		            }else{
		                res.json({
		                    msg: 'userInserted',
		                    name: name,
		                    token: token
		                });
		            }
		        });
		    })
		    }
		).catch(
		    (error)=>{
		        res.json(error)
		    }
		)
});

module.exports = router;
