// To use local ENV
require('dotenv').config();


// Pocketbase will be our server, because I think it's absolutely amazing and I want to dive into it.
const PocketBase = require('pocketbase/cjs')
const pb = new PocketBase(process.env.POCKETBASE_URL);

// Setup Express
const express = require('express')
const app = express()
const port = 3000



///////////////////////////////////////////////////
//////// For local Dev, enable some CORS...
///////////////////////////////////////////////////

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


///////////////////////////////////////////////////
//////// AUTH / PB Related work
///////////////////////////////////////////////////

// Authenticate as an account. This will be used to view existing projects.
const AuthenticateNormalUser = async function(username, pw){
  const authData = await pb.collection('users').authWithPassword(username,pw);
  console.log('Auth Success' + pb.authStore.isValid);
  return pb.authStore.isValid;
}



///////////////////////////////////////////////////
//////// FUNCTIONS
///////////////////////////////////////////////////

// Fetch a listing of all records.
async function getAllRecords(){
  const isAuthed = await AuthenticateNormalUser(process.env.ROLE_VIEW, process.env.ROLE_VIEW_PW);
  if(isAuthed){
    const records = await pb.collection('projects').getFullList({
      sort: '-created',
    });
    return records;
  }else{
    console.log('auth not valid.');
    return;
  }
}


///////////////////////////////////////////////////
//////// ROUTING
///////////////////////////////////////////////////

// Get a list of all projects, no filters.
app.get('/projects', async (req, res) => {
  try {
    const result = await getAllRecords();
    res.json(result);
  }
  catch (error){
    console.log(error);
  }
})

app.listen(port, () => {
  console.log('Hello friend....');
  console.log(`Example app listening on port ${port}`)
})