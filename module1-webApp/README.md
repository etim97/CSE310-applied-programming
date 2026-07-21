# NutriMate Web Application

## Overview

NutriMate is a web application designed to help users discover healthy recipes and view nutrition information for different foods. The project was developed to strengthen my understanding of server-side web development using Node.js and Express while learning how to build dynamic web applications that respond to user input.

The application allows users to search for recipes, view recipe details, and check nutritional information. Recipe data is retrieved from the Spoonacular API, while nutrition information is provided by the API Ninjas Nutrition API.

To run the project locally:

1. Clone or download the project.
2. Open the project folder in Visual Studio Code.
3. Open the terminal.
4. Install the project dependencies:

```bash
npm install
```

5. Start the server:

```bash
node server.js
```

or

```bash
npm start
```

6. Open your browser and visit:

```
http://localhost:3000
```

The purpose of this project was to improve my knowledge of Express, EJS templates, routing, API integration, and creating dynamic web pages that respond to user input.

### Software Demo Video

[Software Demo Video](https://drive.google.com/file/d/1zF9vZKoKMDqbXymDgQ9JgGQkkomzGoVV/view?usp=sharing)

---

# Web Pages

### Home Page

The home page introduces NutriMate and explains its purpose. It contains a hero section, a brief description of the application, and feature cards that introduce the Recipe Finder and Nutrition Tracker.

### Recipe Finder

Users can search for recipes by entering ingredients or meal names. When a search is submitted, the application retrieves matching recipes from the Spoonacular API and dynamically displays recipe cards containing images, cooking time, ingredients, descriptions, and cooking instructions.

### Nutrition Tracker

Users can search for any food item to view its nutritional information. The application retrieves data from the API Ninjas Nutrition API and dynamically displays calories, protein, carbohydrates, fat, fiber, and sugar for the selected food.

The application moves between pages using Express routes, while JavaScript and the APIs dynamically generate the recipe and nutrition content.

---

# Development Environment

## Tools Used

- Visual Studio Code
- Git & GitHub
- Node.js
- Express.js
- EJS
- Google Chrome

## Programming Language and Libraries

- JavaScript (ES6)
- HTML5
- CSS3
- Node.js
- Express.js
- EJS
- Fetch API
- Spoonacular API
- API Ninjas Nutrition API


# Useful Websites

- https://expressjs.com/
- https://ejs.co/
- https://nodejs.org/
- https://developer.mozilla.org/
- https://spoonacular.com/food-api
- https://api-ninjas.com/api/nutrition

---

# Future Work

- Add a database to save users' favorite recipes.
- Include more Nigerian and African recipes using a local JSON database.
- Improve the user interface and make the application fully responsive on all devices.
- Add user authentication and personal accounts.
- Improve error handling and loading messages.
- Allow users to filter recipes by dietary preferences such as vegetarian, vegan, and gluten-free.