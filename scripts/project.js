let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



var modal = document.getElementById("modal")
var fModal = false;
var imgModal = document.getElementById("modal-img")
var titleModal = document.getElementById("modal-title")
var desModal = document.getElementById("modal-description")
var closeModal = document.getElementById("modal-close")

var items = document.getElementsByClassName("gallery-item")

let data = [
  {
    "image":"images/01-gravity.png",
    "title":"Gravity Falls",
    "description":"A Disney Movie"
  },
  {
    "image":"images/02-mappa.png",
    "title":"Mappa",
    "description":"Anime Channel"
  },
  {
    "image":"images/theme1.jpg",
    "title":"Gamehub",
    "description":"Gamehub"
  },
  {
    "image":"images/01-gravity.png",
    "title":"Gravity Falls",
    "description":"A Disney Movie"
  },
  {
    "image":"images/02-mappa.png",
    "title":"Mappa",
    "description":"Anime Channel"
  },
  {
    "image":"images/theme1.jpg",
    "title":"Gamehub",
    "description":"Gamehub"
  }
]

for(let i=0;i<items.length;i++){
  items[i].addEventListener("click",()=>{
    if(fModal == false){
      modal.style.visibility = "visible"
      modal.style.opacity = "100%"
      fModal = true
      imgModal.setAttribute("src",data[i]["image"])
      titleModal.innerText = data[i]["title"]
      desModal.innerText = data[i]["description"]
    }
  })
}

closeModal.addEventListener("click",()=>{
  if(fModal == true){
    setTimeout(() => {
      modal.style.visibility = "hidden"
    }, 500);
    
    modal.style.opacity = "0%"
    fModal = false
  }
})