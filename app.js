// app.js
const name = require('./modules/module1'); // Fungsi perkenalan
const umur = require('./modules/module2'); // Fungsi usia
const { isPrime, nextPrime } = require('./modules/module3');  // Fungsi isPrime dan nextPrime
const cekganjilgenap = require('./modules/module4'); // Fungsi cekganjilgenap


// Menggunakan fungsi perkenalan
console.log(name("Faisal"));

const sekarang = 2024; // Tahun sekarang
const tahunLahir = 2005; // Tahun lahir
console.log(`Usia saya adalah ${umur(sekarang, tahunLahir)} tahun.`);
// Menggunakan fungsi nextPrime
const input = 10;
console.log(`Bilangan prima setelah ${input} adalah ${nextPrime(input)}`);  // Memperbaiki isPrime menjadi nextPrime

// Menggunakan fungsi cekganjilgenap
const number = 2;
console.log(`Angka ${number} adalah ${cekganjilgenap(number)}`);

