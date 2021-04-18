//Import The Database Connection
const mongoose = require("./connection");

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////
const Handicraft = require("../models/Handicraft")
const User = require("../models/User")
///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {
  // Drop the Database before seeding
  await Handicraft.remove({})

  //*********Code Goes Here
  const handicrafts = await Handicraft.create([
    {
      name: 'Glamorama',
      description: 'Bring elegance to your attire with unique purse made with recycled material',
      img:"https://i.imgur.com/OTwDw2k.jpg",
      price: 25,
      left: 45
    },
    {
      name: 'Blue Pearl',
      description: 'bring colors to your evening outfits',
      img:"https://i.imgur.com/tCEeXLM.jpg",
      price: 22,
      left: 15

    },
    {
      name: 'Rainbow',
      description: 'There is plenty of colors in this rainbow',
      img:"https://i.imgur.com/po64Bte.jpg",
      price: 10,
      left: 49

    },

    {
      name: "Ever-Ready",
      description:"A collection of bags fit for many utilities",
      img: "https://i.imgur.com/PFHapPY.jpg",
      price: 35,
      left: 32

    }

  ]);                    //***************************** */

  // mongoose.disconnect();

};

// Wait for the DB Connection to be Established
mongoose.connection.on("open", () => {
  // Run Seed Function
  seed();
});
