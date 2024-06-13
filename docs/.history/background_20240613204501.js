const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}

$('.navcenter').on('mouseenter', '.navclick', function() {
    $('.navclick').not(this).css('opacity', '0.2');
});

$('.navcenter').on('mouseleave', '.navclick', function() {
    $('.navclick').css('opacity', '1');
});


$("#hamburgermenu").on("click", function() {
 
    $("#nav").toggleClass("nav-open");
  });


  $(".navclick a").on("click", function() {
    $("#nav").removeClass("nav-open");
  });

  //HAMBURGER MENU


  $('.hambtn').on('click', function () {
    $('.hamitens').toggleClass('active');
    if ($('.hamitens').hasClass('active')) {
      $('.hambtn').css('background-color', 'color');
    }

    $(this).toggleClass('active');
    console.log('clicked')
})