# How I worked on this Project.
    - React App for Client (Front-End)
    - Node Api for Server (Back-End)
    - Mongodb for database.
## Goal
   The goal of the project was to understand the fundamental workflow when 
   building a Full-Stack application with user authentication using MERN. 
## Workflow
   Mongodb < -- > Node < -- > React
## Node API 
   The Node API has 
   - "Express" library to set server and routing for communication.
   - Establishes connection with Mongodb.
   - Authentication Middleware to smothen authentication process when request from client is recived,with the help of jasonwebtoken. 
   - Unit testing to test the client request. Restapi route functionalities are tested.
   - The mongoose models are well written having all the required validations for users.
## React Client
   The react app is designed based on components, context and pages. It uses
   - React, react-dom, react-router-dom libraries to create fragements, routes. 
   - The context includes actions, contect and reducer which helps to navigate for user authentication. 