// TODO: Add "Web Notifications" like https://developer.mozilla.org/en-US/docs/Web/API/Notification/Using_Web_Notifications#Simple_example
// https://github.com/alexgibson/notify.js

var mySkinInit = function() {
    app.triggerBinder.init();
    app.webNotify.init();
    $j('#btnMetrics').after('<input id="skinSettings" type="button" value="Skin Settings" onclick="app.skinSettings.open();">');
    $j('body').append(app.views.skinSettingsDialog);
    app.skinSettings.init();
};

if (typeof skinInit == 'function') {
    skinInit = (function() {
        var base = skinInit;

        return function() {
            base();
            mySkinInit();
        };
    })();
} else {
    var skinInit = mySkinInit;
}
