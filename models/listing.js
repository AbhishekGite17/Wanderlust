const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:String,
    image: {
        type: String,
        default: "https://www.tripadvisor.in/Hotels-g303883-zff8-Nashik_Nashik_District_Maharashtra-Hotels.html",
        set: (v) => v === "" ? "https://www.tripadvisor.in/Hotels-g303883-zff8-Nashik_Nashik_District_Maharashtra-Hotels.html" : v,
    },
    price: Number,
    location: String,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
