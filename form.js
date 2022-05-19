const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
            
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(express.static(__dirname));
            app.get('/', function (req, res) {
                res.sendFile(path.join(__dirname, 'Formular.html'));
            });

            app.post('/', function (req, res) {
                const { fname, lname, email, birthDate } = req.body;
                
                var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (pattern.test(email)) 
                    res.send(`Salut, ${lname} ${fname}! Multumim ca  te-ai abonat la Newsletter-ul nostru! Vei primi un mesaj pe adresa de email ${email}`);
                else     
                res.sendFile('./404.html',{root: __dirname});
              });

            app.listen(process.env.PORT || 3003);