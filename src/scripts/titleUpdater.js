app.titleUpdater = (function() {

    var headTitle = $j("head title");
    var headTitleText = $j("head title").text();

    var setHeader = function() {
        headTitle.text($j('#headerPlayers').text() + ' | ' + headTitleText);

        if ($('errorBox').style.display == 'block') {
            headTitle.text('* COMMUNICATIONS STOPPED * | ' + headTitleText);
            
            if (allowSounds) {
                app.soundPlayer.play('detatch_1');
            }
        }
    };

    setInterval(function() {
        setHeader();
    }, 5000);

    $j(document).on("KAI_CLIENT_DETACH", function(event, params) {
        headTitle.text('* DETACHED * | ' + headTitleText);
    });

    return {
        //init: init
    };

})();