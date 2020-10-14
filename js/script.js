


/*$(function () {
    'use strict';
    $(".openbtn").on("click", function () {
        $(".side-nav").animate({ width: 'toggle' }, 1050);
    });

    $(".openbtn").click(function () {
        $(".side-nav").show("slide", { direction: "left" }, 1000);
    });
})*/

//for open side menu
function openNav() {
    document.getElementById("side").style.width = "250px";
    
}

function closeNav() {
    document.getElementById("side").style.width = "0px";
    
}



//to remove the place holder from the input when focuse
$(function () {
    'use strict';
    //hide placeholder on form focus

    $('[placeholder]').focus(function () {
        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).attr('data-text'));

    });
});