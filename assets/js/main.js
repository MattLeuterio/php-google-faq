
$(document).ready(function () {
    
    //refs

    var menuLinks = $('.main-header__nav__list li');
    var QActn = $('.main-ctn__qA');
    var noCtn = $('.main-ctn__no-ctn');


    // Change Section
    menuLinks.click(function() {
        
        if (! $(this).hasClass('active-link')) {
            menuLinks.removeClass('active-link');
            $(this).addClass('active-link');
            

            if($(this).text() != 'Domande Frequenti') {
               QActn.hide(); 
               noCtn.show();
              
            } else {
                QActn.show(); 
                noCtn.hide();
            }
        } 
    });


});

