# Backend Documentation

This documentation provides an overview of the backend codebase for your project. It includes information on setting up the backend, available API endpoints, authentication, and example requests.

## Table of Contents
- [Setup](#setup)
- [Endpoints](#endpoints)
- [Upload Image](#upload-image)
- [User Authentication](#user-authentication)
- [Get Blogs](#get-blogs)
- [Add Blog](#add-blog)
- [Delete Blog](#delete-blog)

## Setup
To set up the backend, follow these steps:

1. Clone the repository: `git clone (https://github.com/HemantWD/Blogg-App.git)`
2. Install dependencies: npm install
3. Configure environment variables: Create a .env file with the following variables:
4. Start the server: npm start

## Endpoints

### User Authentication

#### Register
Register a new user.

- **URL:** /api/register
- **Method:** POST
- **Request:**

#### Login
Authenticate a user and generate a JWT token.

- **URL:** /api/login
- **Method:** POST
- **Request:**
### Get Blogs
Retrieve a list of blogs.

- **URL:** /blog/getBlogs
- **Method:** GET
- **Response:**
-**Status: 200 OK**


### Add Blog
Add a new blog post (requires authentication).

- **URL:** /blog/addBlog
- **Method:** POST
- **Request:**
- **Response:**
-**Status: 200 OK**



## Conclusion
This concludes the documentation for the backend of your project.
