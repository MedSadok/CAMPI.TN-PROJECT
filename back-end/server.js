<<<<<<< HEAD
const express=require ('express')
const {MongoClient , ObjectID} = require ('mongodb')
const bodyParser= require ('body-parser')
const assert = require ('assert')

 const app=express();

 app.use(bodyParser.json())

const mongo_url='mongodb://localhost:27017'
const dataBase = "UserList"


//connect server.js with database 
MongoClient.connect(mongo_url, { useNewUrlParser: true },(err,client) =>{

assert.equal(err,null,'data base connexion failed')

const db = client.db(dataBase)
 app.post('/add-Contact',(req,res)=>{

    let newContact = req.body
     db.collection('contacts').insertOne(newContact,(err,data)=>{
    
    if (err) res.send("can't add new contact")
     else res.send(data)
          } );
        });

        app.get('/contacts',(req,res)=>{

        db.collection('contacts').find().toArray((err,data)=>{

        if (err) res.send("can't get contact")
        else res.send(data)
})
})

app.post('/add-Rando',(req,res)=>{

        let newRando = req.body
         db.collection('randos').insertOne(newRando,(err,data)=>{
        
        if (err) res.send("can't add new rando")
         else res.send(data)
              } );
            });
            app.get('/randos',(req,res)=>{
    
            db.collection('randos').find().toArray((err,data)=>{
    
            if (err) res.send("can't get rando")
            else res.send(data)
    })
    })

// app.get('/contacts/:id',(req,res)=>{
//   let ContactId=ObjectID(req.params.id) 
//       db.collection('contacts').findOne({_id:ContactId},(err,data)=>{
//        if (err) res.send("can't not get contact")
//        else res.send(data)
//       })
//       })

// app.put('/contacts/:id',(req,res)=>{
//  let contactId =  ObjectID(req.params.id) 
//  let UpdateContact=req.body
//     db.collection('contacts').findOneAndUpdate({_id:contactId}),{...UpdateContact},(err,data) =>{

//         if (err) res.send("can't update contact")
//         else res.send(data)
//     }
//     })

  
        
        })




app.listen(3007, (err) => {
    if(err) console.log("server is not running")
    else console.log("server is running on port 3007")
  })
=======
const express= require ("express");
const mongoose = require ("mongoose");
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const randos = require('./routes/api/randonnees');
const bodyParser = require('body-parser');
const passport = require('passport');


// const {MongoClient, ObjectID} = require ("mongodb");
// const assert = require ("assert");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/Key').MongoUrl;

// Connect to mongo DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true } //need this for api support
  )
.then(() => console.log('Mongo db connected'))
.catch(err => console.log('db erreur'));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use routes
app.get('/', (req, res) => res.send ('hello'))

app.use('/api/users', users);
app.use('/api/Profile', profile)
app.use('/api/Randonnes', randos)

// app.use(bodyParser.json());

// const MongoUrl = "mongodb://localhost:27017";

// const dataBase = "randos";

// MongoClient.connect(
//     MongoUrl, { useNewUrlParser: true }, 
//     (err, client) => {
//         assert.equal(err, null, "dataBase connection failed");
//         const db = client.db(dataBase);

        // app.post("/add-post", (req, res) => {
        //     let newPost = req.body;
        //     db.collection("posts").insertOne(newPost, (err, data)=>{
        //         if (err) res.send("cant not add new post");
        //         else res.send("new post added")
        //     })
        // })

        // app.get("/get-post", (req, res) => {
        //     db.collection("posts")
        //     .find()
        //     .toArray((err, data)=>{
        //         if (err) res.send("cant not get posts list");
        //         else res.send(data)
        //     })
        // })
//     }
// );




app.listen(5500, err => {
    if (err) console.log ('server erreur');
    else console.log ('server is runing on port 5500');
});
>>>>>>> 0c1474019696b28ba5317ab6a212f992c4f5b10f
