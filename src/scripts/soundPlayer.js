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
        _.remove(Sounds, function(item) { return item == 'pm;/snd/kaiAlert.mp3'; });

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

    $j(document).on("KAI_CLIENT_VECTOR", function(event, params) {

        sessionStorage.setItem('userEnterDate', new Date());
    });

    $j(document).on("KAI_CLIENT_JOINS_VECTOR", function(event, params) {

        var user = params.bits[1];

        if (app.soundRegulator.permitEnterSound('enter_1', user)) {
            play('enter_1');
        }
    });

    $j(document).on("KAI_CLIENT_LEAVES_VECTOR", function(event, params) {
        
        if (allowSounds) {
            play('leave_1');
        }
    });

    $j(document).on("KAI_CLIENT_ARENA_PM", function(event, params) {

        if (allowSounds) {
            play('pm_1');
        }
    });

    $j(document).on("KAI_CLIENT_PM", function(event, params) {

        if (allowSounds) {
            play('pm_2');
        }
    });

    $j(document).on("KAI_CLIENT_CONTACT_OFFLINE", function(event, params) {

        if (allowSounds) {
            play('contact_offline');
        }
    });

    $j(document).on("KAI_CLIENT_CONTACT_ONLINE", function(event, params) {

        if (allowSounds) {
            play('contact_online');
        }
    });

    $j(document).on("KAI_CLIENT_DETACH", function(event, params) {

        if (allowSounds) {
            play('detatch_1');
        }
    });

    $j(document).on("KAI_CLIENT_INVITE", function(event, params) {

        if (allowSounds) {
            play('pd_ring1');
        }
    });

    return {
        init: init,
        play: play
    };

})();

app.soundPlayer.init();

