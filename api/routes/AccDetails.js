const router = require("express").Router();
const Account = require("../models/AccDetailsSchema");
const User = require("../models/UserDetailsSchema");
//create a user account

router.post("/user", async (req, res) => {
 
  const userdetails = new User({
    Name : req.body.Name,
    DisplayName: req.body.DisplayName,
    email: req.body.email,
    contact: req.body.Contact,
    Discord: req.body.Discord,
    State: req.body.State,
  });

  // console.log(userdetails);
      try {
        const userrDetails = await userdetails.save();
        // console.log(userdetails);
        res.status(200).json(userrDetails);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

 
});

//create a Valo account

router.post("/account/:displayname", async (req, res) => {

  const displayname1 = req.params.displayname;
  // console.log(displayname1);
  const userid = await User.findOne({DisplayName : displayname1});
  // console.log(userid);
  const userIDD = userid._id;
  
  const accountDetails = new Account({
    DisplayName : displayname1,
    Userid : userIDD,
    Radianite: req.body.Radianite,
    selected: req.body.selected ,
    ValorantP: req.body.ValorantP ,
    Rank: req.body.rank ,
    Price: req.body.price ,

  });

   
      try {
        const savedDetails = await accountDetails.save();
        res.status(200).json(savedDetails);
      } catch (err) {
        res.status(500).json(err);
      }

 
});
//get all account

router.get("/viewall", async (req, res) => {
  try {
    
    const details = await Account.find({ isSold : false});
    // console.log(details)
    res.status(200).json(details);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/viewskin", async (req, res) => {
  try {
    
    const details = await Account.find({'selected.0': {$exists: true}, isSold : false});
    // console.log(details)
    res.status(200).json(details);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/viewrank", async (req, res) => {
  try {
    
    const details = await Account.find({'selected.0': {$exists: false}, isSold : false});
    // console.log(details)
    res.status(200).json(details);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get an account

router.get("/viewaccount/:displayname", async (req, res) => {
  try {
    const displayname =  req.params.displayname;
    const details1 = await Account.findOne({ DisplayName :displayname});
    // console.log(details1)
    // console.log(displayname)
    res.status(200).json(details1);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
