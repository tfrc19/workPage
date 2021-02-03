$(document).ready(function(e){
    var menu = $('#navbar');
    var origOffsetY = menu.offset().top;
    var pageSection = $('#page-section').offset().top,
        navBar = $('#navbar').height(),
        inicio=$('#inicio');
        conocenos = $('#conocenos');
    
    
    function scroll() 
    { 
        if ($(window).scrollTop() >= origOffsetY) 
        {
            menu.addClass('bg-primary colorNavBar fixed-top ');
        } 
            if($(window).scrollTop()==origOffsetY)
                {
                    menu.removeClass('bg-primary colorNavBar fixed-top ');
                }                  
        else 
        {

        }
    }
    function scrollPage(pageSection,e){
        $('html,body').animate({
            scrollTop:pageSection
        },500);
        e.preventDefault();
    }

    document.onscroll=scroll;


    conocenos.on('click',function(e){
        scrollPage((pageSection-navBar),e);
    });
    inicio.on('click',function(e){
        scrollPage((pageSection-navBar),e);
    });

});