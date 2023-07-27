let dollarKurs = 11000.34;
let yevroKurs = 12354.03;
let bilet = dollarKurs * 500;
let mexmonxona = dollarKurs * 250;
let muzey = yevroKurs * 120;
let umumiyXarajatlar = bilet + mexmonxona + muzey;

let userName = prompt("Salom ismingizni kiriting");
let puli = prompt(userName + " harajatlar uchun necha pul mo'ljalladingiz? ");

if (puli >= umumiyXarajatlar) {
  alert("Oq yo'l " + userName);
} else if (puli < umumiyXarajatlar) {
  alert(`Alisher, ozgina sabr qilish kerak
bo’lar ekan.`);
}
