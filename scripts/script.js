const firstSetPhotos = ['./img/Rectangle 292.png', './img/Rectangle 290.png', './img/Rectangle 291.jpg'];
const secondSetPhotos = ['./img/zapchast1.jpg', './img/zapchast2.jpg', './img/zapchast3.jpg'];
const thirdSetPhotos = ['./img/tex1.jpg', './img/tex2.jpeg', './img/tex3.jpg'];
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');
const price1 = document.getElementById('price-1');
const price2 = document.getElementById('price-2');
const price3 = document.getElementById('price-3');
const photoElement1 = document.getElementById('img-1');
const photoElement2 = document.getElementById('img-2');
const photoElement3 = document.getElementById('img-3');
var counter = 0;
function addActiveClass() {
    var btn1 = document.getElementById('set-1');
    var btn2 = document.getElementById('set-2');
    var btn3 = document.getElementById('set-3');
    if (counter === 0) {
        btn1.classList.add("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
    }
    else if (counter === 1) {
        btn2.classList.add("active");
        btn3.classList.remove("active");
        btn1.classList.remove("active");
    }
    else {
        btn2.classList.remove("active");
        btn3.classList.add("active");
        btn1.classList.remove("active");
    }
}
function changeDescription() {
    addActiveClass();
    if (counter === 0) {
      text1.innerHTML = "Замена экрана";
      price1.innerHTML = "1400₽";
      text2.innerHTML = "Ремонт батареи";
      price2.innerHTML = "1600₽";
      text3.innerHTML = "Установка ПО";
      price3.innerHTML = "700₽";
    } else if (counter === 1) {
        text1.innerHTML = "Замена запчасти";
        price1.innerHTML = "1300₽";
        text2.innerHTML = "Устранение вирусов";
        price2.innerHTML = "1500₽";
        text3.innerHTML = "Оптимизация";
        price3.innerHTML = "1100₽";
    } else if (counter === 2) {
        text1.innerHTML = "Тех. обслуживание";
        price1.innerHTML = "300₽";
        text2.innerHTML = "Настройка ПО";
        price2.innerHTML = "800₽";
        text3.innerHTML = "Чистка телефона";
        price3.innerHTML = "1500₽";
    }
  }
function showFirstSet() {
  photoElement1.src = firstSetPhotos[0];
  photoElement2.src = firstSetPhotos[1];
  photoElement3.src = firstSetPhotos[2];
  counter = 0;
  changeDescription();
}
function showSecondSet() {
    photoElement1.src = secondSetPhotos[0];
    photoElement2.src = secondSetPhotos[1];
    photoElement3.src = secondSetPhotos[2];
    counter = 1;
    changeDescription();
  }
  function showThirdSet() {
    photoElement1.src = thirdSetPhotos[0];
    photoElement2.src = thirdSetPhotos[1];
    photoElement3.src = thirdSetPhotos[2];
    counter = 2;
    changeDescription();
  }
showFirstSet();
