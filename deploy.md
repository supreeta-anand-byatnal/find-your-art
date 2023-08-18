# Deployment on Render

## 1. Setup Application Files
#### Frontend
- Remove the 'https://localhost:3000' portion of the route from HTTP requests and ensure the routes match the routes in the backend as is.
- Run ````npm run build```` to create a production build of the frontend.
- Move the 'build' folder to top level of 'backend' folder.
#### Backend
- Add ````const path = require('path');```` if not already present at the top of app.js.
- Add ````app.use(express.static('build'))````.
- Add ````app.get('*', (req,res) => { res.sendFile(path.join(__dirname, 'build','index.html'));});```` to app.js. This allows the application to serve files
from the frontend for navigation (i.e. accessing the defined routes). 'build' may need to be changed depending on where in the directory the static files lie.

## 2. Create New Web Service
- Click on the blue "New +" button on the top of the screen.
- Connect your repos to Render or enter the repo URL (ensure repo is public).
- IMPORTANT: The root directory is the 'backend' folder so enter 'backend' for 'Root Directory'. 'Node' runtime. Enter 'npm install' for 'Build Command'. 'npm start' for
for 'Start Command'.
- Choose the appropriate instance type.
- Click 'Create Web Service'. This will take a few minutes, but eventually a link will be provided for where the app is deployed.
