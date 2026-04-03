const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.error("Error connecting to DB:", err);
});

async function main(){
    await mongoose.connect(MONGO_URL);

}

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/testListing", async(req, res) =>{
    let sampleListing = new Listing({
        title: "My new villa",
        description: "My New Villa",
        price: 1000,
        location: "Nashik",
        country: "India",
    })
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});

app.listen(8080, () => { 
    console.log("Server is listening on port 8080");
});

 
