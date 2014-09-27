/*
 * Audio credits:
 * Some of the sounds in this project were created by 
 * - David McKee (ViRiX) soundcloud.com/virix (http://opengameart.org/content/ui-sound-effects-pack)
 * - StumpyStrust (http://opengameart.org/content/ui-sounds)
 * - Lokif (http://opengameart.org/content/gui-sound-effects)
 * - Nick Bowler (http://opengameart.org/content/various-sound-effects-from-rubiks-race)
 */

// Use chat sounds when tab is not visible using visibility api:
// http://stackoverflow.com/questions/19519535/detect-if-browser-tab-is-active-or-user-has-switched-away

app.soundPlayer = (function() {

    var skinSounds = [
        'chat_1',
        'chat_2',
        'chat_3',
        'contact_offline',
        'contact_online',
        'detatch_1',
        'detatch_2',
        'detatch_3',
        'detatch_4',
        'enter_1',
        'enter_2',
        'invite_1',
        'invite_2',
        'leave_1',
        'leave_2',
        'pd_ring1',
        'pm_1',
        'pm_2'
    ];

    /**
     * Initializes the Sounds array with custom sounds for this skin.
     * @returns {undefined}
     */
    var init = function() {

        // Remove default pm sound effect
        _.remove(Sounds, function(item) {
            return item == 'pm;/snd/kaiAlert.mp3';
        });

        _(skinSounds).forEach(function(skinSound) {
            Sounds.push(skinSound + ';/skin/sounds/' + skinSound + '.mp3');
        });
    };

    /**
     * Plays a sound to the user
     * @param {type} sound One of the values in the skinSounds or Sounds array
     * @returns {undefined}
     */
    var play = function(sound) {

        soundPlay(sound);
    };

    var getSound = function(soundEvent) {
        var sound = localStorage.getItem('SKIN_SOUND-' + soundEvent);

        if (!sound || sound === 'none') {
            sound = false;
        }

        return sound;
    };

    $j(document).on("KAI_CLIENT_VECTOR", function(event, params) {

        sessionStorage.setItem('userEnterDate', new Date());
    });

    $j(document).on("KAI_CLIENT_JOINS_VECTOR", function(event, params) {

        var sound = getSound('KAI_CLIENT_JOINS_VECTOR');
        var user = params.bits[1];

        if (sound && app.soundRegulator.permitEnterSound('enter', user)) {
            play(sound);
        }
    });

    $j(document).on("KAI_CLIENT_LEAVES_VECTOR", function(event, params) {

        var sound = getSound('KAI_CLIENT_LEAVES_VECTOR');

        if (sound && allowSounds) {
            play(sound);
        }
    });

    $j(document).on("KAI_CLIENT_ARENA_PM", function(event, params) {
        
        app.webNotify.pmNotification(params.bits[2], params.bits[3]);

        var sound = getSound('KAI_CLIENT_ARENA_PM');

        if (sound && allowSounds) {
            play(sound);
        }
    });

    $j(document).on("KAI_CLIENT_PM", function(event, params) {
        
        app.webNotify.pmNotification(params.bits[2], params.bits[3]);

        var sound = getSound('KAI_CLIENT_PM');

        if (sound && allowSounds) {
            play(sound);
        }
    });

    $j(document).on("KAI_CLIENT_CONTACT_OFFLINE", function(event, params) {

        var sound = getSound('KAI_CLIENT_CONTACT_OFFLINE');

        if (sound && allowSounds) {
            play(sound);
        }
    });

    $j(document).on("KAI_CLIENT_CONTACT_ONLINE", function(event, params) {

        var sound = getSound('KAI_CLIENT_CONTACT_ONLINE');

        if (sound && allowSounds) {
            play(sound);
        }
    });

    $j(document).on("KAI_CLIENT_DETACH", function(event, params) {

        var sound = getSound('KAI_CLIENT_DETACH');

        if (sound && allowSounds) {
            play(sound);
        }
    });

    $j(document).on("KAI_CLIENT_INVITE", function(event, params) {

        var sound = getSound('KAI_CLIENT_INVITE');

        if (sound && allowSounds) {
            play(sound);
        }
    });

    $j(document).on("KAI_CLIENT_CHAT", function(event, params) {

        clientChatHandler(event, params);
    });

    $j(document).on("KAI_CLIENT_CHAT2", function(event, params) {

        clientChatHandler(event, params);
    });

    var clientChatHandler = function(event, params) {
        
        app.webNotify.chatNotification(params.bits[2], params.bits[3]);
        
        var sound = getSound('KAI_CLIENT_CHAT');

        if (sound && allowSounds) {
            play(sound);
        }
    };

    return {
        init: init,
        play: play
    };

})();

app.soundPlayer.init();

