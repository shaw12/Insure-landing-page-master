$(document).ready(function(){
    $('.links').hide();
    $('.close-icon').hide();
    $('.ham-icon').on('click', () => {
        $('.links').toggle();
        $('.close-icon').toggle();
        $('.ham-icon').toggle();
    })
    $('.close-icon').on('click', () => {
        $('.links').toggle();
        $('.ham-icon').toggle();
        $('.close-icon').toggle();
    })
})