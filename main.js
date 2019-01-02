$( document ).ready(function() {
    console.log( "ready!" );
    
    var md = new MobileDetect(window.navigator.userAgent);
    
    var androidDevice = $("#android-device");
    var iphoneDevice = $("#iphone-device");
    var desktopBrowser = $("#desktop-browser");
    var unknownDevice = $("#unknown-device");

    if (md.os() === 'AndroidOS') {
        androidDevice.show();
    } else if (md.is('iPhone')) {
        iphoneDevice.show();
    // Desktop browser
    } else if (!md.mobile()) {
        desktopBrowser.show();
    // Can't detect device
    } else {
        unknownDevice.show();
    }

});