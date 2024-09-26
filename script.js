$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 3000,
        items: 1, // Apenas um item em todas as resoluções
        navText: [
            '<i class="fa-solid fa-chevron-left fa-2xs"></i>', // Seta esquerda
            '<i class="fa-solid fa-chevron-right fa-2xs"></i>' // Seta direita
        ]
    });
});
