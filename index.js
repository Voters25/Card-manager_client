const express = require('express');
const app = express();

// Клиентская часть
app.use(express.static('cards/build'));

const path = require('path');

app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'cards', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
console.log('server started on port:',PORT);
app.listen(PORT);