import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import axios from "axios";

const AddNewRecipe = () => {
    const [ingredients, setIngredients] = useState([])
    const [count,setCount]=useState(0);
    const addIngredient = (ing, quantity) => {
        setCount((val)=>{return ++val})
        setIngredients((oldList) => ([...oldList, { "ingredient":ing,"quantity": quantity }]))
        ingredients.forEach((item,index)=>{
            console.log("\n",index);
            console.log(item.id," ",item.ing," ",item.quantity)

        })
    }
    const saveTheRecipe=()=>{
        const name=document.getElementById("name").value     
        const description=document.getElementById("description").value      
        const image=document.getElementById("image").value
        const obj={
             title: name,
            ingredients: ingredients,
            description: description,
            image:image
        }
        console.log(obj)

        axios.post("http://localhost:3000/recipe",
        {
            title: name,
            ingredients: ingredients,
            description: description,
            image:image
        }
 )
        .then( (res) => {
                console.log(res);
                        
        })
        .catch((err) => {
               console.log("Error signIn: ",err)    
        })

    }
    return (
        <div class="container-fluid">
            <h1 class="row bg-dark text-secondary" style={{ color: "Black", justifyContent: "center", backgroundColor: "grey", padding: "2%", fontSize: 50, marginBottom: "2%" }}>Add New Recipes</h1>
            <form class="row " style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div class="form-group col-md-5 shadow p-3  bg-body-tertiary rounded" style={{ margin: "1%" }}>
                    <label for="exampleInputEmail1" style={{fontSize:20,fontWeight:"bold"}} >Recipe Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Recipe Name" />
                </div>
                <div class="form-group col-md-5 shadow p-3  bg-body-tertiary rounded" style={{}}>
                    <label for="exampleInputEmail1" style={{fontSize:20,fontWeight:"bold"}} >Recipe Description</label>
                    <input type="text" class="form-control"  id="description" style={{ wordWrap: "break-word", wordBreak: "break-all" }} placeholder="Enter Recipe Description" />
                </div>
                <div class="form-group col-md-5 shadow p-3  bg-body-tertiary rounded" style={{}}>
                    <label for="exampleInputEmail1" style={{fontSize:20,fontWeight:"bold"}} >Add Image URL</label>
                    <input type="url" class="form-control"  id="image" style={{ wordWrap: "break-word", wordBreak: "break-all" }} placeholder="Enter Recipe Description" />
                </div>


                <div class="form-group col-md-5 shadow p-3  bg-body-tertiary rounded page-content page-container" id="page-content">
                    <div class="">
                        <div class="row container d-flex justify-content-center">
                            <div class="col-md-12">
                                <div class="card px-3">
                                    <div class="card-body">
                                        <p class="card-title" style={{fontSize:20,fontWeight:"bold"}}>Ingredients</p>
                                        <div class="add-items d-flex"> 
                                        <input type="text" id="ingName" class="form-control" placeholder="Name" /> 
                                        <input type="text" id="quan" class="form-control " placeholder="Quantity" /> 
                                        <button class="add btn btn-secondary font-weight-bold" type="button" onClick={()=>{
                                            let name=document.getElementById("ingName").value; alert(name)
                                            let quan=document.getElementById("quan").value; alert(quan)
                                            addIngredient(name,quan);
                                    }}>Add</button> 
                                        </div>
                                        <div>
                                            <ul class="d-flex flex-column">
                                            
                       {ingredients.map((item,index)=>{return(<li key={index} style={{listStyleType:"none"}}>
                                                    <div class="form-check">
                                                        <label class="form-check-label">
                                                            {item.ingredient} {item.quantity}
                                                        </label> </div>

                                                </li>)}
                                                )}




                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <button type="button" class="btn btn-secondary" style={{width:"15%",textAlign:"center",fontWeight:"bold",margin:"2%"}} onClick={()=>{saveTheRecipe()}}>Save</button>
            </form>


        </div>

    )
}

export default AddNewRecipe;