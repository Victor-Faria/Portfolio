$('.card-content').on('mouseenter', function () {
    let video = $(this).find('video').get(0);
    video.play();
    if (video) {
        video.play().catch(error => {
            console.error("Click anywhere to enable project video player! (Tip)");
            $('.tip').css('color', '#083f91');
            $('.tip').css('letter-spacing', '5px');
            $('.tip').css('font-size', '1.5rem');
            
           
            setTimeout(function() {
                $('.tip').css('color', 'white'),
                $('.tip').css('letter-spacing', '1px'),
                $('.tip').css('font-size', '0.9rem');
            }, 600);
            
        });
    }
    
});

$('.card-content').on('mouseleave', function () {
    let video = $(this).find('video').get(0);
    video.pause();
    video.currentTime = 0;
});

$('body').on('click', function () {
    $('.tipbox').css('opacity', '0');
});
