$(document).ready(function(e){
    var menu = $('#navbar');
    var origOffsetY = menu.offset().top;
    var pageSection = $('#page-section').offset().top,
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

    document.onscroll=scroll;

  
    conocenos.on('click',function(e){
        
        $('html,body').animate({
            scrollTop:pageSection
        },500);
        e.preventDefault();
    });
});