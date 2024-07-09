# Restaurant App

Welcome to the Restaurant App! This application is designed to provide a seamless online ordering experience for customers, allowing them to browse dishes, add items to their cart, and proceed to checkout.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Components](#components)
- [Redux State Management](#redux-state-management)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

- **Home Page**: Displays a carousel of images with animated text and a logo.
- **About Page**: Provides information about the restaurant.
- **Menu Page**: Displays a list of dishes with details and the ability to add items to the cart.
- **Blog Page**: Showcases articles related to food, cooking tips, and restaurant news.
- **Cart Page**: Displays the items added to the cart with options to adjust quantities and proceed to checkout.
- **Checkout Page**: Allows users to enter their details and place an order.
- **Responsive Design**: Ensures the app is accessible on various devices, including mobile phones and tablets.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/restaurant-app.git
    cd restaurant-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Usage

- **Home Page**: Navigate to the home page to see the welcome message, carousel, and animated text.
- **About Page**: Click on "About" in the navigation menu to learn more about the restaurant.
- **Menu Page**: Click on "Items" in the navigation menu to browse the available dishes.
- **Blog Page**: Click on "Blogs" in the navigation menu to read the latest articles.
- **Cart Page**: Add items to the cart and view them by clicking on the cart icon.
- **Checkout Page**: Proceed to checkout from the cart page to place your order.

## Technologies

- **Frontend**: React.js, CSS
- **State Management**: Redux
- **Routing**: React Router
- **Animations**: GSAP, CSS animations
- **Icons**: Font Awesome

## Components

- **Navbar**: Provides navigation across different pages.
- **Header**: Displays the main carousel with images and text.
- **About**: Contains information about the restaurant.
- **Items**: Shows the list of available dishes.
- **Blogs**: Lists blog articles with summaries and links to full content.
- **CartPage**: Displays items in the cart and allows quantity adjustments.
- **CheckoutPage**: Facilitates the checkout process.

## Redux State Management

The app uses Redux to manage the state of the cart and the items:

- **Cart Slice**: Handles actions related to adding and removing items from the cart.
- **Items Slice**: Manages the list of available items fetched from a data source.

## Responsive Design

The app is designed to be responsive, with media queries and flexible layouts ensuring a smooth experience on devices of all sizes.

## Contributing

We welcome contributions to enhance the Restaurant App. To contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-branch
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m "Add new feature"
    ```

4. Push to the branch:

    ```bash
    git push origin feature-branch
    ```

5. Open a pull request.


## Acknowledgements

- Thanks to the open-source community for the tools and libraries used in this project.
- Special thanks to the contributors who have helped improve the app.

