const express = require("express")
const router=express()
const Recipe=require("../models/recipeSchema")

const cors = require("cors");

router.options("*", cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200 }));

router.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }));
router.options("*", cors({ origin: 'http://localhost/recipe:3001', optionsSuccessStatus: 200 }));
router.options("*", cors({ origin: 'http://localhost/recipe/:id:3001', optionsSuccessStatus: 200 }));


//router.use(cors)

//view all Recipes
router.get("/",async(req,res)=>{
    console.log("get all recipes")
    try{
        const recipes=await Recipe.find({})
        res.status(200).json(recipes)
}
catch(err){
    res.status(500).json({"error":"Request failed! Try Again"})
}
})

//view indevidual Recipes
router.get("/recipe/:id",async(req,res)=>{
    console.log("Getting Individual Recipe")
    try{
        const id=req.params.id
        console.log(id)
        const recipe=await Recipe.find({_id:id})
        res.status(200).json({"recipeAll":recipe[0],"recipeIng":recipe[0].ingredients})
}
catch(err){
    res.status(500).json({"error":"Request failed! Try Again"})
}
})

//add a recipe
router.post("/recipe",async (req,res)=>{
    console.log(req.body);
   const  {title,description,image,ingredients}=req.body;
   try{
    const recipe=new Recipe({title,description,image,ingredients})
    await recipe.save()
    res.status(200).json({"status":"success","recipe":recipe})
   }
   catch(err){
    console.log(err)
    res.status(500).json({"error":"Recipe Entry failed!Try again"})
   }
   

})

module.exports=router