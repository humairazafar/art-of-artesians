///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const AuthRouter = require("./auth")
const HandicraftController = require("../controllers/handicraft")
const auth = require("./authMiddleware")
const handicraftRouter = require("./handicrafts")
const bcrypt = require('bcryptjs')
const User = require("../models/User")
///////////////////////////////
// Router Specific Middleware
////////////////////////////////

router.use("/handicrafts", handicraftRouter)
// router.use('/auth', AuthRouter)
// / SIGNUP ROUTE
router.get("/auth/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/auth/signup", async (req, res) => {
  try {
    // generate our salt
    const salt = await bcrypt.genSalt(10);
    console.log(req.body);
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, salt);
    console.log(req.body);
    // create the new user
    await User.create(req.body);
    // res.redirect
    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
  }
});

//Login Routes
router.get("/auth/login", (req, res) => {
  res.render("auth/login");
});

router.post("/auth/login", async (req, res) => {
  try {
    // get the user
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      //check if the passwords match
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        // add userId property to the session object
        req.session.userId = user._id;
        // redirect
        res.redirect("/handicrafts");
      } else {
        res.json({ error: "Password does not match" });
      }
    } else {
      res.json({ error: "User Doesn't Exist" });
    }
  } catch (error) {
    res.json(error);
  }
});

//logout
router.get("/auth/logout", (req, res) => {
  // remove the userId property
  req.session.userId = null
  // redirect to main page
  res.redirect("/")
});

// //create new handicraft
// router.get('/handicrafts/new', HandicraftController.new)

// //post the newly created handicraft
// router.post('/', HandicraftController.create)

///////////////////////////////
// Router Routes
////////////////////////////////

//home route
router.get("/", (req, res) => {
  res.render('home')
})



///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router