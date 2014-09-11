/* 
 * This controls the frequency of which sounds will play depending on the time
 * the last sound was played of the same type.
 */
app.soundRegulator = (function() {

    /**
     * Checks if it is okay for a sound to play.
     * @param {type} sound
     * @returns {bool}
     */
    var permitEnterSound = function(sound, user) {
        //debugger;
        var key = sound + user;
       
        if (!allowSounds) {
            return false;
        }
        
        var userEnterDate = sessionStorage.getItem('userEnterDate');
        
        var timeSinceUserEntered = new Date() - Date.parse(userEnterDate);
        
        if (timeSinceUserEntered < 3000) {
                // This user just joined the room, not allowing any sounds within
                // this timeframe will stop the UI from playing multiple sounds 
                // for players currently in the room they entered.
                return false;
        }
        
        var lastDate = sessionStorage.getItem(key);

        if (lastDate) {
            var timeSinceLastEnterSound = new Date() - Date.parse(lastDate);

            if (timeSinceLastEnterSound < 3000) {
                // We already played a sound for this user recently.
                // Don't permit a sound to be played.
                return false;
            }
        }

        sessionStorage.setItem(key, new Date());

        return true;
    };

    return {
        permitEnterSound: permitEnterSound
    };

})();
