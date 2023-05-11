import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Recipes from './components/recipes';
import Layout from "./components/layout"
import { BrowserRouter, Route,Routes ,Link} from 'react-router-dom';
import AddNewRecipe from "./components/addNewRecipe"
import ViewRecipe from './components/viewRecipe';


function App() {
  return (
    <Layout></Layout>
  );
}

export default App;
