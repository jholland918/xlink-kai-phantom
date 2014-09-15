// TODO: Add "Web Notifications" like https://developer.mozilla.org/en-US/docs/Web/API/Notification/Using_Web_Notifications#Simple_example
// https://github.com/alexgibson/notify.js



var mySkinInit = function() {
    app.triggerBinder.init();
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
