$(document).ready(function(e){
    var menu = $('#navbar');
    var origOffsetY = menu.offset().top;
    var pageSection = $('#page-section').offset().top,
        pageContact=$('#contact-page').offset().top,
        pageHeader=$('#header-page').offset().top,
        navBar = $('#navbar').height(),
        contacto=$('#contacto');
        inicio=$('#inicio');
        conocenos = $('#conocenos');
        servicio=$('#servicio');
    
    
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
        scrollPage((pageHeader),e);
    });
    contacto.on('click',function(e){
        scrollPage((pageContact-navBar),e);
    });
    servicio.on('click',function(e){
        scrollPage((pageSection-navBar),e);
    });


});