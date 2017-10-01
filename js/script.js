'use strict'

// set cover image
function coverImageBig(){

    // check if a big cover image exists
    if(!$("#coverImageBig"))
    {
        return;
    }

    //resize image
    var height = $(window).height() - 100
    var paddingTop = height/3
    if($(window).width() < height && height < 680)
    {
        paddingTop = 30;
    }
    $("#coverImageBig").height(height).css("padding-top", paddingTop);
}
$(document).ready(coverImageBig);
$(window).resize(coverImageBig);

function adjustVCenter()
{
    $(".adjust").each(function()
    {
        var p = $(this).find("p");
        p.css("padding-top", ($(this).parent().height() - p.height()) / 2);
    });
}
$(document).ready(adjustVCenter).resize(adjustVCenter);