
const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        reuired: true
    },
    description: {
        type: String,
        reuired: true
    },
    image: {
        type: String,
        reuired: true
    },
    ingredients:[{
        ingredient:{type:String},
        quantity:{type:String}
    }]
})
const recipeModel= mongoose.model("RECIPE",recipeSchema)
module.exports=recipeModel;

