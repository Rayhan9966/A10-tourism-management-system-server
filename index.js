const express= require('express');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors =require('cors') ;
const app =express();
const port =process.env.PORT || 5000;

//midle ware
app.use(cors());
app.use(express.json())
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)

//rayhancse16
//igsOMAqml9GYw6OQ

//travelTourism
//MHWGkzmLuAGkaqbE


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ptxksnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const uri = "mongodb+srv://rayhancse16:igsOMAqml9GYw6OQ@cluster0.ptxksnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req , res) => {

    res.send('Travel Tourism is Running')
})

app.listen(port,()=>{

    console.log(`Travel Tourism is Running on PORT,${port}`);
})