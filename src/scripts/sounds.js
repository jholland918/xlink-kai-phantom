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

app.sounds = (function() {

    var names = [
        'chat_1',
        'chat_2',
        'chat_3',
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

    var init = function() {

        // To play sound like this, use soundPlay('pd_ring1');
        Sounds.push('pd_ring1;/skin/sounds/pd_ring1.mp3');
    };

    return {
        init: init
    };

})();

app.sounds.init();
