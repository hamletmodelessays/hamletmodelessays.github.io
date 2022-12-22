// EU Cookie Compliance
window.onload = function(){
    if (!checkCookie('_ics')) { displayCookieMsg(); }
}

function displayCookieMsg() {
    var div = document.createElement('div');
    div.id = 'cookie-law-outer';
    if (document.body.firstChild){ document.body.insertBefore(div, document.body.firstChild) }
    else { document.body.appendChild(div) }

    var viewportWidth = $(window).width();
    if (viewportWidth<=979 ) {
        document.getElementById('cookie-law-outer').innerHTML = '<div class="container" id="cookie-law"><div class="row"><div class="col-md-12 col-lg-12 col-sm-12"><p><img src="/../assets/img/cookie-close-icon.png" onclick="doClose()" />By continuing to use our website <br />we assume your permission to deploy <br />cookies. See our <a href="http://www.ics.ie/index.php?option=com_content&view=article&id=164%3Aprivacy-statement&catid=35%3Aabout&Itemid=252" rel="nofollow" title="Privacy &amp; Cookies Policy">Privacy Statement</a></p></div></div></div>';
    }
    else {
        document.getElementById('cookie-law-outer').innerHTML = '<div class="container" id="cookie-law"><div class="row"><div class="col-md-1"><p><i class="icon-cogs"></i></p></div><div class="col-md-8"><p>By continuing to use our website we <br class="mobile-320-br" />assume your permission to deploy <br class="mobile-320-br" />cookies.<br class="desktop-br" />See our <a href="http://www.ics.ie/index.php?option=com_content&view=article&id=164%3Aprivacy-statement&catid=35%3Aabout&Itemid=252" rel="nofollow" title="Privacy &amp; Cookies Policy">Privacy Statement</a></p></div><div class="col-md-3"><a class="btn close-cookie-banner" style="border-radius:0" href="javascript:void(0)" onclick="doClose()"><i class="icon-ok-sign"></i><span style="color:#fff">&nbsp;&nbsp;Accept & Close</span></a></div></div></div>';
    }
    // adjust CSS

    $("#cookie-law-outer").slideDown();
    $("#cookie-law").slideDown();
    setTimeout(doClose,10000);
}

function doClose() {
    $("#cookie-law-outer").slideUp();
    $("#cookie-law").slideUp();
    var viewportWidth = $(window).width();
    if ((viewportWidth>=980) && (viewportWidth<=1200)) {
       $('#supported_by').css('margin-top', '0');
   }
   else if (viewportWidth>=1201) {
		$('#supported_by').css('margin-top', '0');
   }
    hideCookies();
}

function hideMessage() {
    $("#cookie-law-outer").slideUp();
    $("#cookie-law").slideUp();
    if ((viewportWidth>=980) && (viewportWidth<=1200)) {
        $('.navbar-fixed-top').css('margin-top', '0');
    }
    else if (viewportWidth>=1201) {
        $('.navbar-fixed-top').css('margin-top', '0');
    }
    hideCookies();
}

function hideCookies() {
    createCookie('_ics','1',0);
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}





