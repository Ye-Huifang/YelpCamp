const Joi = require('joi');

// Not a mongoose schema
// It is used to validate our data before we attempt to savie it with mongoose
module.exports.campgroundSchema = Joi.object({
    // server side validation
    campground: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required()

    }).required()
})