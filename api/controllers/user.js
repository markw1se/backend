const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const firebase = require('../../firebase');

exports.user_signup = (req, res, next) => {
  const firebaseAuth = firebase.firebaseAuth;
  email = req.body.email
  password = req.body.password
  firebase.createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      res.status(201).json({ message: "User created successfully", user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(500).json({ error: errorMessage });
    });
};

exports.user_login = (req, res, next) => {
  const firebaseAuth = firebase.firebaseAuth;
  email = req.body.email
  password = req.body.password
  firebase.signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Sign-in success for user:", user.email);
      res.status(200).json({ message: "Sign-in successful", user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in failed with error code:", errorCode);
      let statusCode = 500; // Default to internal server error

      if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
        // Unauthorized - Invalid email or password
        statusCode = 401;
      } else if (errorCode === 'auth/too-many-requests') {
        // Too many failed attempts - You can customize this status code as needed
        statusCode = 429; // Too Many Requests
      }

      // Send an error response with the appropriate status code
      res.status(statusCode).json({ error: errorMessage });
    });
};

exports.user_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
