import $ from 'jquery'
import './app1.css'
const $plus1 = $('.plus1')
const $minus1 = $('.minus1')
const $mul2 = $('.mul2')
const $divide2 = $('.divide2')
const $number = $('#number')
const n = localStorage.getItem("n");
$number.text(n || 100)
// console.log($number)

$plus1.on('click', () => {
    let n = parseInt($number.text())
    
    n += 1;
    localStorage.setItem("n", n)
    $number.text(n)
    
})

$minus1.on('click', () => {
    let n = parseInt($number.text())
    n -= 1;
    localStorage.setItem("n", n)
    $number.text(n)
})
$mul2.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem("n", n);
    $number.text(n)
});
$divide2.on('click', () => {
    let n = parseInt($number.text())
    n /= 2;
    localStorage.setItem("n", n)
    $number.text(n)
})