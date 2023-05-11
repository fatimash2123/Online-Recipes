import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./navbar";
const Home = () => {
    return (
        <div class="container-fluid  text-center my-auto">
          <div class="row text-bg-dark">
            <div class="col-md-12">
             
            </div>
          </div>
            <div class="row">
            <h1 class="col-md-12 bg-dark text-secondary" style={{ color: "Black", justifyContent: "center", backgroundColor: "grey", padding: "2%", fontSize: 50, marginBottom: "2%" }}>Welcome to Online Recipes</h1>
            </div>
            <div class="row h-100 d-inline-block">
                <img class="img-fluid col-md-5 rounded mx-auto d-block shadow-lg p-3 mb-5 bg-body-tertiary rounded" src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"></img>
            </div>
        </div>
    )
}

export default Home;