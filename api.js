const express = require('express');
const validator = require('validator');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const { pipeline } = require('stream');

mongoose.connect('mongodb://localhost:27017/Agricultor', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log("DataBase Connection Successful");
}).catch((e) => {
  console.log(e);
});


// mongoose schema
const signupSchema = {
  fname: {
    type:String,
    required:true,
    minlength:[2,"minimum 2letters"], 
    maxlength:15
  },
  lname: {
    type:String,
    required:true,
    minlength:[2,"minimum 2letters"], 
    maxlength:15
  },
  mobile:
  {
    type:Number,
    unique:true,
    required:true,
    minlength:[10,"minimum 10letters"], 
    maxlength:10
  } ,
  city:{
    type:String,
    required:true,
    minlength:[3,"minimum 3letters"], 
    maxlength:20
  },
  state: {
    type:String,
    required:true,
    minlength:[2,"minimum 2letters"], 
    maxlength:30
  },
  email: {
    type:String,
    required:true,
    unique:true,
    validate(value){
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email")
      }
  
    }
  },
  password: {
    type:String,
    required:true,
    minlength:[8,"minimum 8letters"], 
    maxlength:16
  },
  cpass: {
    type:String,
    required:true,
    minlength:[8,"minimum 8letters"], 
    maxlength:16
  }
};
const newpostSchema = {
  question: {
    type:String,
    required:true,
    minlength:[10,"minimum 10letters"], 
  },
  date: {
    type:String,
    required:true,
  },
  time: {
    type:String,
    required:true,
  }
};

const Signup = mongoose.model('Signup', signupSchema);
const Newpost = mongoose.model('Newpost', newpostSchema);


app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('viewengine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.basedir = app.get('views');


app.get('/', (req, res) => {
  res.status(200).render('home.pug');
});

app.get('/signup', (req, res) => {
  res.status(200).render('signup.pug');
});

app.post('/signup', (req, res) => {

  const password = req.body.password;
  const confirmPassword = req.body.cpass;

  if (password === confirmPassword) {

    var mydata = new Signup({
      fname: req.body.fname,
      lname: req.body.lname,
      mobile: req.body.mobile,
      city: req.body.city,
      state: req.body.state,
      email: req.body.email,
      password: req.body.password,
      cpass: req.body.cpass
    });
    mydata.save();
    res.status(200).render('home.pug');
    // res.status(201).send("Your Data Is Saved");

  } else {
    res.send("Data Is Not Saved Please Check Confirm Password");
    // res.status(200).render('signup.pug');
  }


});

app.get('/signin', (req, res) => {
  res.status(200).render('signin.pug');
});

app.post('/signin', async (req, res) => {

  try {
    const loginEmail = req.body.email;
    const loginPassword = req.body.pass;

    const readedUserEmail = await Signup.findOne({ email: loginEmail });

    if (readedUserEmail.password === loginPassword) {
      res.status(200).render("loginsuccess.pug");
    } else {
      res.render("signin.pug");
      // res.send("Login Not Successful (Invalid Details)");
    }

  } catch (error) {
    console.log(error);
  }
});

app.get('/loginsuccess', (req, res) => {
  res.status(200).render('loginsuccess.pug');
});
app.get('/aboutus', (req, res) => {
  res.status(200).render('aboutus.pug');
});
app.get('/newsfeed', (req, res) => {
  res.status(200).render('newsfeed.pug');
});
app.get('/schemes', (req, res) => {
  res.status(200).render('schemes.pug');
});
app.get('/p&sdesc', (req, res) => {
  res.status(200).render('p&sdesc.pug');
});
app.get('/majorcrops', (req, res) => {
  res.status(200).render('majorcrops.pug');
});
app.get('/dealers', (req, res) => {
  res.status(200).render('dealers.pug');
});
app.get('/communityblog', (req, res) => {
  const posts = Newpost.find({},function (err,newpost) {
   res.status(200).render('communityblog.pug',{
     questionsList:newpost
   });
  });
  const name = Signup.find({},function (err,signupDetails) {
   res.status(200).render('communityblog.pug',{
     signupList:signupDetails
   });
  });
});
app.get('/newpost', (req, res) => {
    res.status(200).render('newpost.pug');
});
app.post('/newpost', (req, res) => {
  
  const question = req.body.question;
  if (question!= "") {
    
    var data = new Newpost({
      question: req.body.question,
      date: req.body.date,
      time: req.body.time
    });
    data.save();
    // res.status(200).render('communityblog.pug');
    // res.status(201).send("Your Data Is Saved");
    res.redirect('/communityblog');
    
  }
  else{
    res.send("your data is not saved");
  }
  
});
// ************  Major Crops Section   ******************

app.get('/mp', (req, res) => {
  res.status(200).render('mp.pug');
});

// ****************   Port Listen   *********************

app.listen(80, (req, res) => {
  console.log('Your Port Is Opened At 80');
});