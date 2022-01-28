const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { validateRequestSchema, btoa ,verifyToken} = require("./../utilities");
const schemas = require("./schemas");
const mongoose = require("mongoose");
const Auth = require("./../model/auth");
let { convertPassToHash, comparePassword } = require("./helper");
const JWT = process.env.JWT_KEY;
const JWT_Expire_in = process.env.JWT_EXPIRE_IN;

router
  .route("/signup")
  .post(validateRequestSchema(schemas), async (req, res, next) => {
    try {
      let { password, username, age, score } = req.body;
      let hash = await convertPassToHash(password);
      let obj = {
        password: hash,
        username, 
        age,
        score
      };
      let isExistUsername = await Auth.findOne({username: username});
      if(isExistUsername){
        // new Error('User Already')
        return res.status(409).json({
          status: false,
          message:"This username is already exist"

        })
      }
      let response = await new Auth(obj).save();
      if (response) {
        let user = response.toJSON();
        const token = jwt.sign(
           { username: user.username, userId: btoa(JSON.stringify(user.id)) },
          JWT, { expiresIn: parseInt(JWT_Expire_in) }
        );
        res.status(200).json({
          token: token,
          username: user.username,
          age: user.age,
          score: user.score,
          status: true,
          message: "Success",
          expiresIn: parseInt(JWT_Expire_in)
        });
      }
    } catch (err) {
      next(err);
    }
  });
  router
  .route("/login")
  .post(validateRequestSchema(schemas), async (req, res, next) => {
    try {
      let { username, password } = req.body;
    // let $or = [{email: username }, {phone: username}];
    let user = await Auth.findOne({username: username});
    if(!user){
        return res.status(404).json({
            status: false,
            message:"User not found"
        })
    }
    let compare  = comparePassword(password, user.password);
    if(!compare){
        return res.status(404).json({
            status: false,
            message:"Password does not match"
        })
    }
    const token = jwt.sign(
        { username: user.username, userId: btoa(JSON.stringify(user.id)) },
      JWT, { expiresIn: parseInt(JWT_Expire_in)}
    );

  return  res.status(200).json({
        token: token,
        username: user.username,
        age: user.age,
        score: user.score,
        status: true,
        message: "Success",
        expiresIn:parseInt(JWT_Expire_in)
      });
    } catch (err) {
      next(err);
    }
  });
router.all("/*", (req, res) => {
  res.status(404).send({ errno: 3001, message: "INVALID_ENDPOINT" });
});

module.exports = router;
