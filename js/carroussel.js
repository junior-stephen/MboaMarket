
const carroussel = document.querySelector("#carroussel");

//=========================
//DECLARATION DES DONNEES
//=========================
const datas_slides= [
    {
        titre: "Le gout du pays, livre chez vous",
        description: "Epices, cafes, miel, pagnes et soins naturels selectionnes aupres des producteurs locaux."
    },
    {
        titre: "Le cafe des hauts plateaux",
        description: "Arabica et robusta torrefies et soin, pour personnes malades."
    },
    {
        titre: "Payer en ligne en toute securite",
        description: "Regler vos achats par MTN Mobile Money ou Orange Money."
    }
]

carroussel.innerHTML= "";
for(let i= 0; i<datas_slides.length; i++) {
    const data = datas_slides[i];
    carroussel.innerHTML += `
    <div class="slide" style="background-image:url('images/slide${i+1}.jpg');">
                <div class="slide_container">
                    <div class="slide_text">
                        <h2>${data.titre}</h2>
                        <p>
                            ${data.description}
                        </p>
                        <div class="buttons">
                            <a href="#"> En savoir plus</a>
                        </div>
                    </div>
                </div>
    </div>`;
}

carroussel.innerHTML +=`<div class="slide_options">
                <span class="slide_left">
                    <i class="fa-solid fa-chevron-left"></i>
                </span>
                <span class="slide_right">
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
            </div>`;

//=========================
//DECLARATION DES VARIABLES
//=========================
const slides = document.querySelectorAll("#carroussel .slide");
const slide_left = document.querySelector("#carroussel .slide_left");
const slide_right = document.querySelector("#carroussel .slide_right");

//contient l'indice du slide actuellemnt affiche
let slide_courant = 0;


//=======================================
//MASQUER TOUS LES SLIDES SAUF LE PREMIER
//=======================================
for(let i=1; i<slides.length; i++) {
    slides[i].classList.add("hide");
}

//=========================
//QUELQUES FONCTIONS UTILES
//=========================

//Fonction permettant d'afficher un slide
    function showSlide(index, direction){
        //on masque le slide courant
        slides[slide_courant].classList.add('hide');

        //on cherche l'indice du nouveau slide a afficher
        if(direction.trim().toLowerCase() == "right") { //trim() ajoute l'espace en gauche et a droit
            if(index >= slides.length) {
                slide_courant = 0;
            }
            else{
                slide_courant = index;
            }
        }
        else if(direction.trim().toLowerCase() == "left"){
        if(index < 0) {
            slide_courant = slides.length - 1;
        }
        else{
            slide_courant = index;
        }
    }
 //on affiche le slide courant
 slides[slide_courant].classList.remove('hide');
}

//=========================
//LANCER LE SLIDE
//=========================
slide_left.addEventListener("click", function(e) {
    showSlide(slide_courant -1, "left");
});

slide_right.addEventListener("click", function(e) {
    showSlide(slide_courant +1, "right");
});

//=========================
//LANCER LE SLIDE
//=========================
setInterval(function() {
    showSlide(slide_courant +1, "right");
}, 5000);