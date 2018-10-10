$(function(){
    $('#ROOM_AD').on('mouseenter click', '.gallery-bar-item-content', function() {
        let url = $(this).css('background-image');
        $('#ROOM_COVER').css('background-image', url);
    });

    var movement = $(window).on('scroll click', function(){
        $('#ROOM_BOARD').fadeOut(1000);
        movement.off();
    })
})