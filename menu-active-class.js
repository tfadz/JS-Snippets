 var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
    $('.mega-menu li a').each(function () {
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
            $(this).parent().previoussibling().find('a').removeClass('active');
        }
    });  

    // This was used to add an active class to navigation menu item. Used to create a custom WordPress menu but couldn't use WordPress menu functionality. 
    // Had to add a custom class to li a when clicking on menu nav link.