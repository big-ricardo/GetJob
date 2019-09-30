
function pessoal() {

    document.querySelector('.olo').classList.add("aparece");
    document.querySelector('.ola').classList.add("aparece");
    document.querySelector('.alo').classList.remove("aparece");

}

function comercial() {

    document.querySelector('.olo').classList.add("aparece");
    document.querySelector('.alo').classList.add("aparece");
    document.querySelector('.ola').classList.remove("aparece");

}

$(document).ready(function(){
    var speed = 3000;
    var run = setInterval('rotate()',speed);

    var item_width= $('#itens li').outerWidth();
    var left_value = item_width * (-1);

    $('#itens li:first').before($('#itens li:last'));

    $('#itens ul').css({'left' : left_value});

    $("next").click(function(){
        var left_intend = parseInt($('#itens li').css('left')) - item_width;
        $('#itens ul').animate({'left':left_intend}, 200, function(){
            $('#itens li:last').after($('#itens li:first'));
            $('#itens ul').css({'left' : left_value});
        });
    });
    $('#itens').hover(
        function(){
            clearInterval(run);
            disableScroll();
        },
        function(){
            var run = setInterval('rotate()',speed);
            enableScroll();
        });

});
function rotate(){
    $('#next').click();
}

