$(document).ready(function(e){
    var menu = $('#navbar');
    var origOffsetY = menu.offset().top;
    var pageSection = $('#page-section').offset().top,
        pageContact=$('#contact-page').offset().top,
        pageHeader=$('#header-page').offset().top,
        webSite =$('#webSite').offset().top,
        ecomerce=$('#ecomerce').offset().top,
        digital=$('#digital').offset().top,
        cloud=$('#cloud').offset().top,
        navBar = $('#navbar').height(),
        pageTeam=$('#team').offset().top,
        contacto=$('#contacto');
        inicio=$('#inicio');
        conocenos = $('#conocenos');
        servicio=$('#servicio');
        equipo=$('#equipo');
        btnWebSite = $('#btnWebSite');
        btnEcomerce=$('#btnEcomerce');
        btnContactar=$('#contactar');
        btnDigital=$('#btnDigital');
        btnCloud=$('#btnCloud');
        iconTop=$('#iconTop');
    
    iconTop.hide();
   
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
            if($(window).scrollTop()>=pageSection){
                iconTop.show();
            }    
            if($(window).scrollTop()<=pageSection){
                iconTop.hide();
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
        $('#collapsibleNavId').css({"display":"none"});
        $('#navinVisible').css({"display":"none"});
        $('#navVisible').css({"display":"block"});
        
    }
    

    document.onscroll=scroll;

    //Manejo de menu Hamburger
$('#navVisible').on('click',function(e){
    $('#navVisible').css({"display":"none"});
    $('#navinVisible').css({"display":"block"});
    $('#collapsibleNavId').css({"display":"block"});
});

$('#navinVisible').on("click",function(e){
    $('#navVisible').css({"display":"block"});
    $('#navinVisible').css({"display":"none"});
    $('#collapsibleNavId').css({"display":"none"});
});

    iconTop.on('click',function(e){
        scrollPage((pageHeader),e);
       
    })
    conocenos.on('click',function(e){
        scrollPage((pageSection-navBar),e);
    });
    inicio.on('click',function(e){
        scrollPage((pageHeader),e);
        //$('#collapsibleNavId').hide();
    });
    contacto.on('click',function(e){
        scrollPage((pageContact-navBar),e);
    });
    servicio.on('click',function(e){
        scrollPage((pageSection-navBar),e);
    });
    equipo.on('click',function(e){
        scrollPage((pageTeam-(navBar+navBar)),e);
    });
    btnWebSite.on('click',function(e){
        //scrollPage((pageSection-navBar),e);
        //scrollPage((webSite-navbar),e);
        //alert(webSite);
        scrollPage(webSite-navBar,e);
        
    });
    btnEcomerce.on('click',function(e){
        scrollPage((ecomerce-navBar),e);
    });
    btnDigital.on('click',function(e){
        scrollPage((digital-navBar),e);
    });
    btnCloud.on('click',function(e){
        scrollPage((cloud-navBar),e);
    });
    btnContactar.on('click',function(e){
        scrollPage((pageContact-navBar),e);
    });
   

    


});