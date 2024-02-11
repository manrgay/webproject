const express = require("express");
const router = express.Router();
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const path = require('path');
const cookie = require('cookie-parser');
const md5 =require('md5')

router.use(cookie());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const multer = require('multer');

const pool = mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 3306,
});



// Login
router.get('/login', (req, res) => {
    res.render('member/login');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    pool.query(sql, [username,md5(password)], (err, results) => {
        if (err) {
            console.error(err);
            res.render('member/login');
        } else {
            if (results.length === 0) {
                res.render('member/login', { msg: 'Wrong Username or Password' });
            } else {
                res.cookie('username', username, { maxAge: 900000 });
                res.redirect('/member'); // หลังจากล็อกอินสำเร็จ ให้ redirect ไปยังหน้า member
            }
        }
    });
});

// Member
router.get('/member', (req, res) => {
    const username = req.cookies.username;
    if (username) {
        res.render('member/member', { username: username });
    } else {
        res.redirect('/member/login'); // ถ้าไม่มี username ใน cookie ให้ redirect ไปยังหน้า login
    }
});

// Logout
router.get('/logout', (req, res) => {
    res.clearCookie('username'); // ก่อนที่จะ redirect หน้า ต้อง clear คุกกี้ก่อน
    res.redirect('/main'); // หลังจากล็อกเอ้าท์สำเร็จ ให้ redirect ไปยังหน้า login
});

router.get('/register', (req, res) => {
    res.render('member/register');
});

router.post('/register', (req, res) => {
    const { name,lastname, email,username, password } = req.body;
    
    const sql = "INSERT INTO login (name, lastname, email,username, password) VALUES (?, ?, ? ,?,?)";
    pool.query(sql, [name,lastname,email, username, md5(password)], (err, results) => {
        if (err) {
            console.error(err);
            res.render('member/register', { msg: 'Registration failed, please try again.' });
        } else {
            res.redirect('/login'); // หลังจากที่สมัครสมาชิกสำเร็จ ให้ redirect ไปยังหน้า login
        }
    });
});

router.get('/', (req, res) => {
    res.render('member/main');
});

router.get('/productlist', (req, res) => {
    res.render('member/productlist');
});

router.get('/payment', (req, res) => {
    res.render('member/payment');
});


router.post('/upload', (req, res) => {
    const { name, address, phone } = req.body;
    const sql = "INSERT INTO telbel_money (name, address, phone) VALUES (?, ?, ?)";
    pool.query(sql, [name, address, phone], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error uploading data to telbel_money table' });
        } else {
            res.status(200).json({ message: 'Data uploaded successfully to telbel_money table' });
        }
    });
});

router.get('/aboutme', (req, res) => {
    res.render('member/aboutme');
});

router.get('/record', (req, res) => {
    res.render('member/record');
});
router.get('/main', (req, res) => {
    res.render('member/main');
});





module.exports = router;