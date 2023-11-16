require('dotenv').config();
const https = require('https');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const multer = require('multer'); 
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const fullPath = path.join(__dirname, 'fullchain.pem');
const fullPathPriv = path.join(__dirname, 'privkey.pem');
app.use(bodyParser.json());

app.use(cors({ origin: process.env.CORS_ORIGIN }));
console.log(process.env.CORS_ORIGIN);

app.use(express.urlencoded({ extended: true }));


app.use(express.json());

const options = {
  key: fs.readFileSync(fullPathPriv),
  cert: fs.readFileSync(fullPath),
};
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Master',
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch(err => {
  console.error('Error connecting to MongoDB Atlas', err);
});
/*
const API_KEY = 'e8de5fbb6aa4f856d875af382033a1f9';
const DOMAIN = 'blinq.co';

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

const messageData = {
  from: 'Excited User <blinqauth@gmail.com>',
  to: 'julianbrickman@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!',
};

client.messages
  .create(DOMAIN, messageData)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
*/



// Create a User model
const collectionName = 'Users'; // Replace with your collection name

//const User = mongoose.model(collectionName, new mongoose.Schema({}), collectionName);
/*
mongoose.connection.collection(collectionName).insertOne(dataToSave, (error, result) => {
  if (error) {
    console.error('Error logging user:', error);
  } else {
    console.log('User logged:', dataToSave);
  }
});
*/

  /*User.find()
  .then((users) => {
    console.log('All users:', users);
  })
  .catch((error) => {
    console.error('Error retrieving users:', error);
  });
  */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Access the userId from the request body
    const userId = req.body.userId+req.body.eventId;
    // Use userId to define the destination folder
    const uploadDir = `uploads/${userId}`;
    
    // Check if the directory exists, create it if not
    fs.mkdir(uploadDir, { recursive: true }, (err) => {
      if (err) {
        return cb(err, null);
      }
      cb(null, uploadDir);
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//Not in use
app.post('/upload', upload.single('fileToUpload'), (req, res) => {
  const userId = req.body.userId;
  console.log(req.body);
  // File has been uploaded, and req.file contains information about the uploaded file
  // You can save the file, process it, or save details in a database from here

  res.status(200).send('File uploaded successfully!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, this is a simple API!' });
});

//Get files
app.get('/api/files/:userId/:filename', (req, res) => {
  const userId = req.params.userId; // Get the user ID from the URL parameters
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads/',userId+"/" ,  filename);
  console.log(filePath);
  res.sendFile(filePath);
});

//First page User login
app.get("/api", (req,res) => {
  const username = req.query.username;
  console.log(username);
  mongoose.connection.collection(collectionName).findOne({"email": username }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json({"Password": result.Password, "Name": result.Name});
    } else {
      console.log('User not found');
    }
  });
})
//Search Bar
app.get("/api/searchBar", async (req,res) => {
  try {
    const userArray = await mongoose.connection.collection("Users").find({}).toArray();
    const infoArray = [];
    for (let i=0;i<userArray.length;i++) {
        infoArray.push({"Name":userArray[i].Name,"email":userArray[i].email})
    }
    if (userArray.length > 0) {
      console.log('users retrieved:');
      res.json(infoArray);
    } else {
      console.log('No users found.');
      res.status(404).json({ message: 'No users found' });
    }
  } catch (error) {
    console.error('Error querying users:', error);
    res.status(500).json({ message: 'Error querying users' });
  }
})

//Home Page, users enrolled events
app.get("/api/home", (req,res) => {
  const username = req.query.username;
  mongoose.connection.collection(collectionName).findOne({"email": username }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json({"events": result.events});
    } else {
      console.log('User not found');
    }
  });
})

//Dont think this is in use
app.get("/api/eventPage", (req,res) => {
  const username = req.query.username;
  mongoose.connection.collection(collectionName).findOne({"email": username }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json({events});
    } else {
      console.log('User not found');
    }
  });
})

//Needs to be updated
app.get("/api/enterprise", (req,res) => {
  res.json({companyInformation});
})

//Needs to be updated
app.post("/api/findUserEnterprise", (req, res) => {
  const userData = req.body; // This will contain the userData parameter sent from the frontend
  // Assuming you want to find a user based on some criteria (e.g., FirstName)
  const foundUser = companyInformation.find((user) => user.CompanyName === userData.CompanyName);

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
//Adding enrolled users to an event
app.post('/addEvent/:userId', (req, res) => {
  const userId = req.params.userId;
  const eventId = req.body.eventId;

  mongoose.connection.collection("Events").findOneAndUpdate(
    { id: eventId.id },
    { $push: { "enrolledUsers": userId } },
    (error, result) => {
      if (error) {
        console.error('Error adding user to event:', error);
        res.status(500).json({ message: 'Error adding user to event' });
      } else if (result.value) {
        console.log('User added to event:', userId);
        res.json({ message: 'User added to event successfully' });
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    }
  );
});

//adding a event to a user
app.post('/user/addEvent/:userId', (req, res) => {
  const userId = req.params.userId;
  const eventId = req.body.eventId;

  mongoose.connection.collection("Users").findOneAndUpdate(
    { "email": userId },
    { $push: { "events": eventId } },
    (error, result) => {
      if (error) {
        console.error('Error adding user to event:', error);
        res.status(500).json({ message: 'Error adding user to event' });
      } else if (result.value) {
        console.log('Event added to User:', userId);
        res.json({ message: 'User added to event successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  );
});
//Adding a submission to a users event
app.post('/user/addSubmission/:userId',upload.single('fileToUpload'), (req, res) => {
  const file = req.file;
  const userId = req.body.userId;
  const eventId = req.body.eventId;
  
  // Find the user with the given email
  mongoose.connection.collection("Users").findOne({ "email": userId }, (error, user) => {
    if (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'Error finding user' });
    } else if (user) {
      for (let i=0;i<user.events.length;i++) {
        if (eventId === String(user.events[i].id)) {
          user.events[i].submissions.push(file);
        }
      }
        mongoose.connection.collection("Users").updateOne(
          { "email": userId },
          { $set: { "events": user.events } },
          (updateError) => {
            if (updateError) {
              console.error('Error adding submission to event:', updateError);
              res.status(500).json({ message: 'Error adding submission to event' });
            } else {
              console.log('Submission added to event:', eventId);
              res.json({ message: 'Submission added to event successfully' });
            }
          }
        );
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

//add experience to the user 
app.post('/user/addExperience/:userId', (req, res) => {
  const userId = req.params.userId;
  const jobInfo = req.body.experience;
  console.log(jobInfo);

  mongoose.connection.collection("Users").findOneAndUpdate(
    { "email": userId },
    { $push: { "experience": jobInfo} },
    (error, result) => {
      if (error) {
        console.error('Error adding job:', error);
        res.status(500).json({ message: 'Error adding job to user' });
      } else if (result.value) {
        console.log('job added to User:', userId);
        res.json({ message: 'Job added sucessfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  );
});

app.post('/user/addskill/:userId', (req, res) => {
  const userId = req.params.userId;
  const SkillInfo = req.body.skill;

  mongoose.connection.collection("Users").findOneAndUpdate(
    { "email": userId },
    { $push: { "skills": SkillInfo} },
    (error, result) => {
      if (error) {
        console.error('Error adding skill:', error);
        res.status(500).json({ message: 'Error adding skill to user' });
      } else if (result.value) {
        console.log('skill added to User:', userId);
        res.json({ message: 'skill added sucessfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  );
});
//Get events to be displayed
app.get("/api/events", async (req,res) => {
  try {
    const eventArray = await mongoose.connection.collection("Events").find({}).toArray();
    
    if (eventArray.length > 0) {
      console.log('Events retrieved:');
      res.json(eventArray);
    } else {
      console.log('No events found.');
      res.status(404).json({ message: 'No events found' });
    }
  } catch (error) {
    console.error('Error querying events:', error);
    res.status(500).json({ message: 'Error querying events' });
  }
})
//adding new user to the database if he does not exist
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  mongoose.connection.collection(collectionName).findOne({"email": req.body.email }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json({ message: "Account exists under this email"});
    } else {
      mongoose.connection.collection(collectionName).insertOne(newUser, (error, result) => {
        if (error) {
          console.error('Error logging user:', error);
        } else {
          console.log('User logged:', newUser);
        }
      });
      res.json({ message: "User added successfully"});
    }
  });
});
//finding a user, used in profile section
app.get("/api/profile", (req,res) => {
  const username = req.query.username;
  mongoose.connection.collection(collectionName).findOne({"email": username }, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
    } else if (result) {
      res.json(result);
    } else {
      console.log('User not found');
    }
  });
})

//not used
app.post("/api/findUser", (req, res) => {
  const userData = req.body; // This will contain the userData parameter sent from the frontend
  // Assuming you want to find a user based on some criteria (e.g., FirstName)
  const foundUser = Currentuser.find((user) => user.Name === userData.Name);

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
//not used
app.get("/api/currentUser", (req,res) => {
  res.json({Currentuser})
})
//not used
app.get("/api/fullUserList", (req,res) => {
  res.json({userlist})
})
server.listen(5001, 'ec2-3-23-255-185.us-east-2.compute.amazonaws.com', () => {
  console.log('Server is running on HTTPS port 5001');
});
/*
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});


const server = https.createServer(options, app);

server.listen(5001,'0.0.0.0', () => {
  console.log('Server is running on HTTPS port 5001');
});
*/