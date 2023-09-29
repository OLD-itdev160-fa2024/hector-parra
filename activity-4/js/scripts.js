//welcome message
var user = 'Hector',
    salutation = 'Hello ',
    greeting = salutation + user + '! Here are the latest Product Reviews',
    greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;

//Macbook Price
var mbPrice = 1499.99,
    studentDiscount = .10,
    mbStudentPrice = mbPrice - (mbPrice * studentDiscount),
    mbpriceEl = document.getElementById('mbPrice'),
    mbstudentPriceEl = document.getElementById('mbStudent-Price');

mbpriceEl.textContent = mbPrice.toFixed(2);
mbstudentPriceEl.textContent = mbStudentPrice.toFixed(2);

//Wiz Price
var wzPrice = 29.99,
    studentDiscount = .10,
    wzStudentPrice = wzPrice - (wzPrice * studentDiscount),
    wzpriceEl = document.getElementById('wzPrice'),
    wzstudentPriceEl = document.getElementById('wzStudent-Price');

wzpriceEl.textContent = wzPrice.toFixed(2);
wzstudentPriceEl.textContent = wzStudentPrice.toFixed(2);