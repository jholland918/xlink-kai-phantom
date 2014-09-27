app.skinSettings = (function() {

    var init = function() {
        $j('.play-btn').click(function(event) {
            playButtonClick.call(this, event);
        });
        
        initSounds();
    };
    
    var initSounds = function() {
        
        if (!localStorage.getItem('web-notify-chat')) {
            localStorage.setItem('web-notify-chat', 'yes');
        }
        
        if (!localStorage.getItem('web-notify-pm')) {
            localStorage.setItem('web-notify-pm', 'yes');
        }
        
        _(app.config.soundEvents).forEach(function(soundEvent, index) {
            
            var soundId = 'SKIN_SOUND-' + soundEvent;
            
            if(!localStorage.getItem(soundId)) {
                
                localStorage.setItem(soundId, app.config.defaultSounds[index]);
            }
        });
    };

    var open = function() {
        
        if (localStorage.getItem('web-notify-chat') === 'yes') {
            $j('#web-notify-chat').prop('checked', true);
        }
        
        if (localStorage.getItem('web-notify-pm') === 'yes') {
            $j('#web-notify-pm').prop('checked', true);
        }
       
        _(app.config.soundEvents).forEach(function(soundEvent, index) {
            
            var soundId = 'SKIN_SOUND-' + soundEvent;
            var sound = localStorage.getItem(soundId);
            var selectId = '#SOUND-' + soundEvent;
            $j(selectId).val(sound);
        });
        
        $j("#skinSettingsDialog").dialog({
            width: 500,
            buttons: {
                Save: function() {
                    saveButtonClick();
                    $j(this).dialog("close");
                },
                Cancel: function() {
                    $j(this).dialog("close");
                }
            }
        });
    };

    var saveButtonClick = function() {
        if($j('#web-notify-chat').is(":checked")) {
            localStorage.setItem('web-notify-chat', 'yes');
        } else {
            localStorage.setItem('web-notify-chat', 'no');
        }
        
        if ($j('#web-notify-pm').is(":checked")) {
            localStorage.setItem('web-notify-pm', 'yes');
        } else {
            localStorage.setItem('web-notify-pm', 'no');
        }
        
        _(app.config.soundEvents).forEach(function(soundEvent) { 
            var sound = $j('#SOUND-' + soundEvent).val();
            
            localStorage.setItem('SKIN_SOUND-' + soundEvent, sound);
        });
    };

    var playButtonClick = function(event) {
        event.preventDefault();
        var name = $j(this).attr('name');
        var action = name.split("-")[1];
        var sound = $j('#SOUND-' + action).val();
        app.soundPlayer.play(sound);
    };

    return {
        init: init,
        open: open
    };

})();

//skin-settings