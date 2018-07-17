var express = require('express');
//Add path module
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var Work = require('../models/Work.js');
var nodemailer = require('nodemailer');
var parser = require('body-parser');
var validator = require('validator');
/*Setup Routes*/
/* GET home page. */

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/api/work', function(req, res, next){
	Work.find(function(err, works) {
		if(err) return next(err);
		res.json(works);
	});
});

router.get('/api/work/:proj_id', function(req, res, next){
	Work.findOne({'proj_id': req.params.proj_id}, function(err, work) {
		if(err) return next(err);
		res.json(work);
	});
});

router.post('/contact', function(req, res){

	if(!validator.isEmpty(req.body.name) && !validator.isEmpty(req.body.email) && !validator.isEmpty(req.body.message)) {
		
		if(!validator.isEmail(req.body.email)) {
			res.json({response: "Please provide a valid email address"});
		}else {
			var htmloutput = `
			<h1>Portfolio Message</h1>
			<ul>
				<li>${req.body.name}</li>
				<li>${req.body.email}</li>
				<li>${req.body.message}</li>
			</ul>
			`;

			var transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
					user: 'jessyvander1@gmail.com',
					pass: 'ACSvolume10!'
				},
				tls: {
        			// do not fail on invalid certs
        			rejectUnauthorized: false
    			}
			});

			var mailOptions = {
				from: req.body.email,
				to: 'jvand223@gmail.com',
				subject: 'Portfolio Contact Message',
				text: req.body.message,
				html: htmloutput
			};

			transporter.sendMail(mailOptions, function(error, res) {
				if(error) {
					return console.log(error);
				}else {
					res.sendStatus(200);
				}
			});
			res.json({response: "Your message has been sent!"});
		}

	}else {
		res.json({response: "Please fill in all fields"});
	}

		
});

module.exports = router;