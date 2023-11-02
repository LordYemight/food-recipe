# FoodiesHub - A Recipe Search Web App

FoodiesHub is a web application that allows users to search for recipes and view detailed information about each recipe. It provides a user-friendly interface for finding the perfect recipe for your next meal.

## Features

- **Recipe Search:** Easily search for recipes based on your favorite ingredients or dishes.
- **Detailed Recipe Information:** Get comprehensive information about each recipe, including ingredients and their weights.
- **Responsive Design:** Enjoy a seamless experience on different devices, thanks to the responsive design.

## Components

### 1. Navbar Component (Navbar.js)

- Represents the navigation bar of the application.
- Provides the structure and styling for the navigation bar, including the logo and navigation links.
- Responsible for rendering the logo and navigation links.

### 2. RecipeDetails Component (RecipeDetails.js)

- Renders the list of ingredients for a recipe.
- Receives an `ingredients` prop, which is an array of ingredient objects.
- Uses the `map` function to iterate over the `ingredients` array and render a list item for each ingredient.
- Each list item displays the ingredient's text and weight.
- A reusable component for ingredient lists.

### 3. Alert Component (Alert.js)

- Renders an alert message based on the `alert` prop it receives.
- Displays the `alert` prop value inside an `<h3>` element.
- Responsible for rendering alert messages to the user.
- Used to display notifications, warnings, or error messages.

### 4. Recipe Component (Recipe.js)

- Represents a single recipe.
- Receives a `recipe` prop, containing information about the recipe.
- Extracts data from the `recipe` prop, such as the label, image URL, URL link, and ingredients.
- Uses the `useState` hook to manage the visibility of the ingredient details.
- Renders the recipe's label, image, URL link, and a button to toggle the display of ingredient details.
- If the `show` state is true, it renders the `RecipeDetails` component, passing the `ingredients` prop.
- Responsible for rendering individual recipes and their associated details.

### 5. App Component (App.js)

- The main component of the application, serving as the entry point.
- Manages the overall state and functionality of the application.
- Uses hooks like `useState` to manage the state of the query, recipes, and alert message.
- Defines constants for the API ID and API Key required for making requests to the Edamam API.
- The `getData` function is an asynchronous function that sends a request to the Edamam API based on the user's query and updates the state with the fetched recipes.
- The component renders a navigation bar, a search form with an input field, an alert message if applicable, and a list of recipes.
- If there are recipes available, it maps over the `recipes` state and renders a `Recipe` component for each recipe.
- Handles user input, fetches recipe data from the Edamam API, and displays the search results along with a navigation bar.

### 6. CSS Styles (App.css)

- Contains styles for the various components in the application.
- Defines custom CSS variables using the `:root` selector.
- Sets general styles for the application, such as font-family, margin, padding, and text-decoration.
- Provides styles for the navigation bar, search form, alert message, recipes, and other specific elements.
- Ensures proper presentation and layout of the components.

## Getting Started

To use this application:

1. Clone this repository to your local machine.

2. Customize the API data source by modifying the API URL and authentication details in the `App.js` file to reflect your specific API and application requirements.

3. Install the required dependencies by running `npm install` in your terminal.

4. Start the development server by running `npm start` in your terminal.

5. Explore and experience the dynamic recipe search and listing functionalities provided by this application.

## Customization and Feedback

Feel free to customize the design and functionalities to match your specific requirements. Your feedback and contributions are highly appreciated to further enhance this project.

Explore the FoodiesHub and simplify your recipe search today!

---

**Note**: Ensure that the API URL and authentication details in the `App.js` file are correctly configured to work seamlessly with your chosen data source.

Repository Link: [FoodiesHub - Recipe Search App](https://github.com/LordYemight/foodies-hub)
