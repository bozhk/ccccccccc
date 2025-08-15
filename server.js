const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Белый список fingerprint'ов (добавляй сюда хэши от покупателей)
const whiteList = [
    'вставь_хэш_покупателя_1',  // Например, 'a1b2c3d4e5f6...'
    'вставь_хэш_покупателя_2',
    // Добавляй новые по мере продаж
];

app.post('/check-license', (req, res) => {
    const { fingerprint } = req.body;
    if (!fingerprint) {
        return res.status(400).json({ valid: false, message: 'No fingerprint provided' });
    }
    const isValid = whiteList.includes(fingerprint);
    res.json({ valid: isValid });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
