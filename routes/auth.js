///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////

//signup  "/auth/sign"
router.get("/signup", (req, res) => {
    res.render("auth/signup")
});
router.post("/signup", async (req, res) => {
  try{
      //encrypt password
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      //create the user
      await User.create(req.body)
      //redirect to login page
      res.redirect("/auth/login")
  } catch(error){
    res.status(400).json(error)
  
  }
});

//login "/auth/login"
router.get("/login", (req, res) => {
    res.render("auth/login")
});
router.post("/login", async(req, res)=> {
    try {
         //Check if the user already exist 
    const user = await User.findOne({username: req.body.username})
      if (user){
          const result = await bcrypt.compare(req.body.password, user.password)
          if (result){
              req.session.user = {
                  username: user.username,
                  id: user._id
              };
              res.redirect("/handicrafts")
          } else {
              res.status(400).json({error: "Password does not match"})
          }

      } else {
          res.status(400).json({error: "Please sign up to support"});
      }
    } catch (error){
      res.status(400).json(error);
    }
});

//logout
router.get("/logout", (req, res) => {
    req.session.user = null
    res.redirect("/")
} )
 


///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router