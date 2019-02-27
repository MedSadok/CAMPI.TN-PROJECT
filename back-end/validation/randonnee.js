const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRandonneeInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.price = !isEmpty(data.price) ? data.price : '';
  data.departuredate = !isEmpty(data.departuredate) ? data.departuredate : '';
  data.startingpoint = !isEmpty(data.startingpoint) ? data.startingpoint : '';
  data.activity = !isEmpty(data.activity) ? data.activity : '';
  data.duration = !isEmpty(data.duration) ? data.duration : '';
  data.image = !isEmpty(data.image) ? data.image : '';




  if (Validator.isEmpty(data.title)) {
    errors.title = 'title  is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'description is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'price is required';
  }

  if (Validator.isEmpty(data.departuredate)) {
    errors.departuredate = 'departure date is required';
  }

  if (Validator.isEmpty(data.startingpoint)) {
    errors.startingpoint = 'starting point is required';
  }

  if (Validator.isEmpty(data.activity)) {
    errors.activity = 'activity is required';
  }

  if (Validator.isEmpty(data.duration)) {
    errors.duration = 'duration is required';
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = 'image is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
