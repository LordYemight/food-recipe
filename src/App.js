import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
import Navbar from "./components/Header";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    try {
      if (!query) {
        return setAlert("Please fill in the food recipe you want to search");
      }

      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }

      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <Navbar />
      <form onSubmit={onSubmit} className="search-form">
        {alert && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input className="sear" type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe key={uuidv4()} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
