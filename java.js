
// Tüm flip butonlarını seç
const flipButtons = document.querySelectorAll('.flip-btn');

// Her bir buton için olay ekle
flipButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Butona atanmış data-box attribute'u ile ilgili card id'sini al
    const cardId = button.getAttribute('data-box');
    // İlgili id'ye sahip card'ı seç
    const card = document.getElementById(cardId); // Burada sadece .card seçiyoruz

    // Kartı çevirme işlemini gerçekleştir
    card.classList.toggle('flipped'); // .flipped sınıfını ekle/kaldır
  });
});

const navbar = document.querySelector(".navbar")
const menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener("click", function(){
  navbar.classList.toggle("active");
  document.addEventListener("click",function(e){
    if(
      !e.composedPath().includes(menuBtn)&&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});