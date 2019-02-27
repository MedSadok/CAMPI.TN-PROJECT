const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Randonnee = require('../../models/Randonnee');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validateRandonneeInput = require('../../validation/randonnee');

// @route   GET api/randonnees/test
// @desc    Tests randonnee route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'randonnee Works' }));


// @route   POST api/randonnee
// @desc    Create randonnee
// @access  Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRandonneeInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newRando = new Randonnee(
        // {...req.body}
        {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      departuredate: req.body.departuredate,
      startingpoint: req.body.startingpoint,
      activity: req.body.activity,
      duration: req.body.duration,
      image: req.body.image,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newRando.save().then(post => res.json(post));
  }
);


// @route   GET api/randonnee/all
// @desc    Get randonnee
// @access  Public

router.get('/all', (req, res) => {
    Randonnee.find()
      .sort({ date: -1 })
      .then(randos => res.json(randos))
      .catch(err => res.status(404).json({ norandonneefound: 'No randonnee exist' }));
  });

  //@ route GET api/randonne/all/id
  //@desc GET randonnee
  //@ accec public

  router.get('/:id', (req, res) => {
      Randonnee.findById(req.params.id)
      .then(randos => res.json(randos))
      .catch(err => res.status(404).json({ norandonneefound: 'no randonne exist'}));

  });

  //@route DELETE api/randonnee/ id
  //@route DELETE randonnee 
  //@ accec private

  router.delete('/:id',

  passport.authenticate('jwt', { session:false }),
  (req, res) => {
      Profile.findOne({ user: req.user.id })
      .then(profile => {
          Randonnee.findById(req.params.id)
          .then(randos => {

              //check for randonnee owner

              if (randos.user.toString() !== req.user.id) {
                  return res.status(401)
                  .json({ notauthorized: 'user not authorized' });

              }

              // Delete  
              randos.remove()
              .then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ randonneenotfound: 'No randonnee found' }))
      });

      
  }

  
  );


module.exports = router;
