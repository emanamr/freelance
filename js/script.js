


/*$(function () {
    'use strict';
    $(".openbtn").on("click", function () {
        $(".side-nav").animate({ width: 'toggle' }, 1050);
    });

    $(".openbtn").click(function () {
        $(".side-nav").show("slide", { direction: "left" }, 1000);
    });
})*/


function openNav() {
    document.getElementById("side").style.width = "250px";
    
}

function closeNav() {
    document.getElementById("side").style.width = "0px";
    
}