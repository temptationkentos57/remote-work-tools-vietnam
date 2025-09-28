const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Remote Work Tool application! / Chào mừng đến với ứng dụng Công cụ Làm việc từ xa!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});