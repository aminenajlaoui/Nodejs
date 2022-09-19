var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aminenajlaoui007@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'anajlaoui007@gmail.com',
  to: 'aminenajlaoui007@gmail.com',
  subject: 'Sending Email using Node.js',
  text: '<h1>Welcome Amine Najlaoui</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});