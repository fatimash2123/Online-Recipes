import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import {Routes, Route,useParams } from "react-router-dom";
import axios from "axios";
const ViewRecipe=()=>{
    const {id}=useParams()
   // alert(`id is ${id}`);
    const [recipeDetails,setRecipeDetails]=useState({})
    const [recipeIngredients,setRecipeIngredients]=useState({})
    const [count, setCount] = useState(0)
    const call = async () => {
        if (count === 0) {
            setCount((old)=>{old++})
            console.log(`count is ${count}`)
            try { 
                const res = await axios.get(`http://localhost:3000/recipe/${id}`)
               // alert(res.data)
                console.log(res)
                console.log(res.data)
                setRecipeDetails(()=>{return res.data.recipeAll})
                setRecipeIngredients(()=>{return res.data.recipeIng})
                alert(recipeDetails.ingredients)
                     }
            catch (err) {
                alert(err)
                console.log(err)
            }
        }
    }
      call()


    const recipe={
        type: "breakfast", title: "Juice",
        ingredients: [{ "ing": "abc","quantity":"1cup" },{ "ing": "vanilla","quantity":"2 spoon" }],
        descrption: "Some quick example text to build on the card title and make up the bulk of the card's content",
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2017/12/waffle-honey-yogurt-bananas-flickr.jpg?quality=82&strip=1"
    }
    return(
        <div class="container-fluid">
        <h1 class="row bg-secondary text-dark" style={{color:"Black",justifyContent:"center",backgroundColor:"grey",padding:"2%",fontSize:50,marginBottom:"2%"}}>{recipeDetails.title}</h1>
        
        <div class="card" style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
  <img src={recipeDetails.image} class="card-img-top" style={{width:"90%",height:400}}/> 
</div>
<div>
    <h2 class="bg-dark text-secondary" style={{padding:"2%",fontWeight:"bold",margin:"2%"}}>Ingredients</h2>
{
    (recipe.ingredients).map((item,index)=>{
        return(
          
            <div key={index}>
                <p>{item.ingredient} {item.quantity}</p>
            </div>
        )
    })
}
</div>
<h2 class="bg-dark text-secondary" style={{padding:"2%",fontWeight:"bold",margin:"2%"}}>Recipe Description</h2>
<p >{recipeDetails.description}</p>

      </div>
    )
}

export default ViewRecipe;