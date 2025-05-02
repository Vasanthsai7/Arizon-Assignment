\#  Arizon E-Commerce Frontend

A fully functional and responsive e-commerce frontend built with \*\*React.js\*\* and \*\*Tailwind CSS\*\*, featuring product listings, cart functionality, filtering, search, dark mode, and smooth navigation between pages.

\---

\##  Features

\-  Responsive design using Tailwind CSS

\-  Product listing from external API (\[FakeStoreAPI\](https://fakestoreapi.com))

\-  Add to Cart with quantity management

\-  Cart summary with total price

\-  Mini cart dropdown and full cart page

\-  Search bar to find products by title

\-  Filter by category and sort by price/rating

\-  Dark mode toggle with localStorage persistence

\-  Clean component-based structure

\-  React Router for navigation

\-  Context API for cart state management

\-  Persistent cart using localStorage

\-  Loading states and graceful error handling

\---

\##  Project Structure

src/ ├── components/ │ ├── Cart.js │ ├── DarkModeToggle.js │ ├── FeaturedProducts.js │ ├── FilterSort.js │ ├── Header.js │ ├── Hero.js │ ├── ProductCard.js │ ├── ProductList.js │ ├── SearchBar.js ├── context/ │ └── CartContext.js ├── pages/ │ ├── CartPage.js │ ├── HomePage.js │ ├── NotFoundPage.js │ ├── ProductListingPage.js ├── App.js ├── index.js └── index.css


\---

\## Getting Started

\### 1. Clone the Repository

git clone https://github.com/your-username/arizon-ecommerce-frontend.git

cd arizon-ecommerce-frontend

2\. Install Dependencies

npm install

3\. Run the Development Server

npm start

Visit: https://arizon-assignment.netlify.app/

## API Source

All products are fetched from:

https://fakestoreapi.com/products

## Tailwind Setup

Tailwind CSS is installed and configured with

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

The tailwind.config.js is set with:

content: \["./src/\*\*/\*.{js,jsx}"\],

darkMode: "class",

Tailwind base styles are imported in index.css.

## Technologies Used

React.js

Tailwind CSS

React Router DOM

Context API for State Management

LocalStorage for cart persistence

FakeStore API

JSX & JavaScript

## Bonus Features

1. Dark Mode Toggle

2. Product Search

3. Filter by Category & Sort by Price/Rating

4. Cart persisted in localStorage

5. Smooth Animations with Tailwind Transitions

6. Loading Spinners and API Error Messages

7. Deployment

## Deployed the frontend on:

Netlify

## Author

Veeramreddy Vasanth Sai Reddy

GitHub: https://github.com/Vasanthsai7

Email: vasanthsaireddyveeramreddy@gmail.com

## License

This project is open source and available under the MIT License.
