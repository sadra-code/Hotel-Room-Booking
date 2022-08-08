import express from "express";
const bcrypt = require('bcrypt');

const router = express.Router();


router.get("/" (req,res) => {


     res.send("Im in the authentication");

});


export default router;