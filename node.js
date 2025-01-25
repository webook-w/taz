const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// إعداد اتصال MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'khalil', // اسم المستخدم الخاص بقاعدة البيانات
    password: 'khalel1596', // كلمة مرور المستخدم
    database: 'khalil' // اسم قاعدة البيانات
});

// الاتصال بقاعدة البيانات
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// إنشاء نقطة نهاية لاسترجاع بيانات الفعالية
app.get('/event/:id', (req, res) => {
    let eventId = req.params.id;
    let sql = `SELECT * FROM events WHERE id = ${eventId}`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result[0]);
        }
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
