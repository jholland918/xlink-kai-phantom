app.webNotify = (function() {

    var init = function() {
        $j("#iconSound").click(function() {

            console.log('clicky');

            function onShowNotification() {
                console.log('notification is shown!');
            }

            function onCloseNotification() {
                console.log('notification is closed!');
            }

            function onClickNotification() {
                console.log('notification was clicked!');
            }

            function onErrorNotification() {
                console.error('Error showing notification. You may need to request permission.');
            }

            function onPermissionGranted() {
                console.log('Permission has been granted by the user');
                doNotification();
            }

            function onPermissionDenied() {
                console.warn('Permission has been denied by the user');
            }

            function doNotification() {
                var myNotification = new Notify('Yo dawg!', {
                    body: 'This is an awesome notification',
                    tag: 'My unique id',
                    notifyShow: onShowNotification,
                    notifyClose: onCloseNotification,
                    notifyClick: onClickNotification,
                    notifyError: onErrorNotification,
                    timeout: 4
                });

                myNotification.show();
            }

            if (Notify.needsPermission) {
                Notify.requestPermission(onPermissionGranted, onPermissionDenied);
            } else {
                doNotification();
            }
        });
    };

    var chatNotification = function(player, message) {
        
        if (localStorage.getItem('web-notify-chat') !== 'yes' || player === whoAmI || player === 'Kai Orbital Mesh') {
            return;
        }
       
        var myNotification = new Notify(player, {
            body: message,
            tag: player + Date.now().toString(),
            timeout: 4,
            icon: '/skin/img/kai_icon_32.png'
        });

        myNotification.show();
    };
    
    var pmNotification = function(player, message) {
        
        if (localStorage.getItem('web-notify-pm') !== 'yes' || player === whoAmI || player === 'Kai Orbital Mesh') {
            return;
        }
       
        var myNotification = new Notify(player, {
            body: message,
            tag: player + Date.now().toString(),
            timeout: 4,
            icon: '/skin/img/kai_icon_32.png'
        });

        myNotification.show();
    };

    return {
        init: init,
        chatNotification: chatNotification,
        pmNotification: pmNotification
    };

})();
