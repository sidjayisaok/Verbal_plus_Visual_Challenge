//a few variables for animation
var zoomClass = "animated zoomOut";
var pulseClass = 'animated pulse';
var endClass ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//this affects the down arrow scroll and animation
$("#downArrow").on({'click': function(){
    $('html,body').animate({
        scrollTop: $("#bottomHalf").offset().top},
        'slow');

            $("#downArrow").addClass(zoomClass).one(endClass, function(){
            $(this).removeClass(zoomClass);
            });
    },

        'mouseover': function(){
        $("#downArrow").addClass(pulseClass).one(endClass, function(){
            $(this).removeClass(pulseClass);
        });
    }
});

//this affects the process button
$("#process").on({'click': function(){
    $('#process').addClass(zoomClass).one(endClass, function(){
        $(this).removeClass(zoomClass);
    });   
},

    'mouseover': function(){
        $("#process").addClass(pulseClass).one(endClass, function(){
            $(this).removeClass(pulseClass);
        });
    }
});

//this affects the products button
$("#products").on({'click': function(){
    $('#products').addClass(zoomClass).one(endClass, function(){
        $(this).removeClass(zoomClass);
    });   
},

    'mouseover': function(){
        $("#products").addClass(pulseClass).one(endClass, function(){
            $(this).removeClass(pulseClass);
        });
    }
});

//this affects the hamburger button
$("#hamburger").on({'click': function(){
    $('#hamburger').addClass(zoomClass).one(endClass, function(){
        $(this).removeClass(zoomClass);
    });   
},

    'mouseover': function(){
        $("#hamburger").addClass(pulseClass).one(endClass, function(){
            $(this).removeClass(pulseClass);
        });
    }
});

//this affects the navbar scroll 
$(document).ready(function(){
    //get screen height to calculate trigger
    var x = $("body").height();
    var y = $("#bottomHalf").height();
    var z = x - y;

    $("nav").affix({
        offset:{
            top: z - 10
        }
    });
});

