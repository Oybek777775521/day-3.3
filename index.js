var dollarKurs = 11000.34;
var yevroKurs = 12354.03;
var bilet = dollarKurs * 500;
var mexmonxona = dollarKurs * 250;
var muzey = yevroKurs * 120;
var umumiyXarajatlar = bilet + mexmonxona + muzey;

var userName = prompt("Salom ismingizni kiriting");
var puli = prompt(userName + " harajatlar uchun necha pul mo'ljalladingiz? ");

if (puli >= umumiyXarajatlar) {
  alert("Oq yo'l " + userName);
} else if (puli < umumiyXarajatlar) {
  alert(`Alisher, ozgina sabr qilish kerak
bo’lar ekan.`);
}
