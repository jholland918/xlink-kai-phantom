app.skinSettings = (function() {

    var init = function() {
        $j('.play-btn').click(function(event) {
            playButtonClick.call(this, event);
        });

        $j('#skin-settings select').change(function() {
            skinSelectChange.call(this);
        });
        
        initSounds();
    };
    
    var initSounds = function() {
        
        _(app.config.soundEvents).forEach(function(soundEvent, index) {
            
            var soundId = 'SKIN_SOUND-' + soundEvent;
            
            if(!localStorage.getItem(soundId)) {
                
                localStorage.setItem(soundId, app.config.defaultSounds[index]);
            }
        });
    };

    var open = function() {
        
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

    var skinSelectChange = function() {
//        var sound = $j(this).val();
//        var id = $j(this).attr('id');
//        var action = id.split("-")[1];
//        alert(action);
    };

    return {
        init: init,
        open: open
    };

})();

//skin-settings