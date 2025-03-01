const Joi = require("joi");

// module.exports.listingSchema = Joi.object({
//   listing: Joi.object({
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//     country: Joi.string().required(),
//     price: Joi.number().required().min(0),
//     image: Joi.string().allow("", null),
//     location: Joi.string().required(),
//   }).required(),
// });

// module.exports.reviewSchema = Joi.object({
//   review: Joi.object({
//     rating: Joi.number().required().min(1).max(5),
//     comment: Joi.string().required(),
//   }).required(),
// });

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required().min(3).max(100),
    description: Joi.string().required().min(10).max(1000),
    country: Joi.string().required().min(2).max(50),
    price: Joi.number().required().min(0).precision(2),
    image: Joi.string().uri().allow("", null),
    location: Joi.string().required().min(2).max(100),
    amenities: Joi.array().items(Joi.string()),
    availableDates: Joi.array().items(Joi.date()),
  }).required(),
});


module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().integer().min(1).max(5),
    comment: Joi.string().required().min(5).max(500),
  }).required(),
});

// Add a custom validator for ObjectId
const validateObjectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error('any.invalid');
  }
  return value;
};

// Modify the listingSchema to include owner validation
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required().min(3).max(100),
    description: Joi.string().required().min(10).max(1000),
    country: Joi.string().required().min(2).max(50),
    price: Joi.number().required().min(0).precision(2),
    image: Joi.string().uri().allow("", null),
    location: Joi.string().required().min(2).max(100),
    amenities: Joi.array().items(Joi.string()),
    availableDates: Joi.array().items(Joi.date()),
    owner: Joi.string().custom(validateObjectId, 'Invalid ObjectId')
  }),
});

