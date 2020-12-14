const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

// Define Middleware
if(process.env.NODE_ENV === "production") {
    app.use(express.static('./google-books-search/build'));
}

// Send every HTML route to React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './google-books-search/build/index.html'));
});

// Listen on env port
app.listen(PORT, () => {
    console.log("Listening on port", PORT + "...");
});