const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 for local development

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/myApi', (req, res) => {
    res.send('Hello, World from my Api!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
