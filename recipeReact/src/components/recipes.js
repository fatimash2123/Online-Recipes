import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import axios from "axios";

const Recipes =  () => {
    const[Record,setRecord]=useState([])
    const [count, setCount] = useState(0)
    const call = async () => {
        if (count === 0) {
            setCount((old)=>{old++})
            console.log(`count is ${count}`)
            try { 
                const res = await axios.get(`http://localhost:3000/`)
                alert(res.data)
                console.log(res)
                console.log(res.data)
                setRecord(()=>{return res.data})
                     }
            catch (err) {
                alert(err)
                console.log(err)
            }
        }
    }
     call()

    const data = [
        {
            _id: 1,
            type: "breakfast", title: "Waffles",
            ingredients: [{ "sugar": "1 cup" }, { "vanilla essence": "2 spoons" }],
            descrption: "Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "https://www.eatthis.com/wp-content/uploads/sites/4/2017/12/waffle-honey-yogurt-bananas-flickr.jpg?quality=82&strip=1"
        },
        {
            _id: 2,
            type: "breakfast", title: "Churros",
            ingredients: [{ "sugar": "1 cup" }, { "vanilla essence": "2 spoons" }],
            descrption: "Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "https://www.eatthis.com/wp-content/uploads/sites/4/2017/12/waffle-honey-yogurt-bananas-flickr.jpg?quality=82&strip=1"
        },
        {
            _id: 3,
            type: "breakfast", title: "Tea",
            ingredients: [{ "sugar": "1 cup" }, { "vanilla essence": "2 spoons" }],
            descrption: "Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "https://www.eatthis.com/wp-content/uploads/sites/4/2017/12/waffle-honey-yogurt-bananas-flickr.jpg?quality=82&strip=1"
        },
        {
            _id: 4,
            type: "breakfast", title: "Coffee",
            ingredients: [{ "sugar": "1 cup" }, { "vanilla essence": "2 spoons" }],
            descrption: "Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "https://www.eatthis.com/wp-content/uploads/sites/4/2017/12/waffle-honey-yogurt-bananas-flickr.jpg?quality=82&strip=1"
        },
        {
            _id: 5,
            type: "breakfast", title: "Juice",
            ingredients: [{ "sugar": "1 cup" }, { "vanilla essence": "2 spoons" }],
            descrption: "Some quick example text to build on the card title and make up the bulk of the card's content",
            img: "https://www.eatthis.com/wp-content/uploads/sites/4/2017/12/waffle-honey-yogurt-bananas-flickr.jpg?quality=82&strip=1"
        }
    ]
    return (
        <div class="container-fluid">
            <h1 class="row bg-dark text-secondary" style={{ color: "Black", justifyContent: "center", backgroundColor: "grey", padding: "2%", fontSize: 50, marginBottom: "2%" }}>Recipes</h1>
            <button type="button" class="btn btn-outline-dark text-secondary " style={{ fontWeight: "bold", position: "relative", left: "40%" }}>Add New Recipe</button>
            <div class="d-flex flex-row justify-content-start align-items-center flex-md-wrap grid gap-5" style={{ margin: "2%" }} >
                {Record.map((item) => {
                    // alert(item._id)
                    return (
                        <div key={item._id} class="card shadow-lg  bg-body-tertiary rounded" style={{ width: "30%", borderColor: "grey", borderWidth: 3 }}>
                            <a href={`/recipe/${item._id}`}><img src={item.image} style={{ width: "100%" }} class="card-img-top" /> </a>
                            <div class="card-body bg-dark text-secondary" style={{}}>
                                <h5 class="card-title" style={{ fontWeight: "bold", fontSize: 30 }}>{item.title}</h5>
                                <p class="card-text">{item.description}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>)
}

export default Recipes;