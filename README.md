# Health and Wellness Products E-Commerce

A full-stack MERN application for a health and wellness products e-commerce platform.

## Features

- User authentication and authorization
- Product browsing, filtering, and searching
- Shopping cart functionality
- Order processing
- Admin dashboard for managing products, orders, and users
- Responsive design for all devices

## Tech Stack

- **Frontend**: React.js, Redux for state management, Bootstrap for styling
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure

```
├── client (Frontend - React)
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── redux
│       └── App.js
└── server (Backend - Node.js/Express)
    ├── config
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    └── index.js
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setting up the project

1. Clone the repository
2. Install server dependencies:
   ```
   npm install
   ```
3. Install client dependencies:
   ```
   cd client
   npm install
   ```
4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
5. Run the development server:
   ```
   npm run dev
   ```

## Project Requirements

This project was developed for CSD 3313 - Web Technologies III, with the requirement to create a three-tier web application:

- **Backend**: MongoDB database with collections for products, users, orders, etc.
- **Middleware**: HTTP Services (GET, POST, PUT, Delete) to interact with the database
- **Frontend**: Web pages to display and manage data, with proper input validation
