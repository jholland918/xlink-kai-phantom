/*
 * This is responsible for overriding XLink Kai functions in order to add
 * event triggers to them so custom code can be executed without having
 * to hack on the actual code itslef. 
 */
app.triggerBinder = (function() {

    var init = function() {
        bindEngineCommands();
    };

    var bindEngineCommands = function() {
        var commandNames = [
//            "KAI_CLIENT_SESSION_KEY",
//            "KAI_CLIENT_CHAT",
//            "KAI_CLIENT_CHAT2",
//            "KAI_CLIENT_LEAVES_CHAT",
//            "KAI_CLIENT_JOINS_CHAT",
            "KAI_CLIENT_JOINS_VECTOR",
            "KAI_CLIENT_LEAVES_VECTOR",
//            "KAI_CLIENT_SUB_VECTOR",
//            "KAI_CLIENT_USER_SUB_VECTOR",
//            "KAI_CLIENT_REMOVE_SUB_VECTOR",
//            "KAI_CLIENT_SUB_VECTOR_UPDATE",
            "KAI_CLIENT_VECTOR",
//            "KAI_CLIENT_LOGGED_IN",
//            "KAI_CLIENT_NOT_LOGGED_IN",
//            "KAI_CLIENT_ADMIN_PRIVILEGES",
//            "KAI_CLIENT_MODERATOR_PRIVILEGES",
//            "KAI_CLIENT_ARENA_PING",
//            "KAI_CLIENT_ADD_CONTACT",
//            "KAI_CLIENT_REMOVE_CONTACT",
//            "KAI_CLIENT_CONTACT_PING",
//            "KAI_CLIENT_AVATAR",
            "KAI_CLIENT_CONTACT_ONLINE",
            "KAI_CLIENT_CONTACT_OFFLINE",
//            "KAI_CLIENT_USER_PROFILE",
//            "KAI_CLIENT_USER_DATA",
//            "KAI_CLIENT_HTTP_RESPONSE",
//            "KAI_CLIENT_CONNECTED_MESSENGER",
            "KAI_CLIENT_ARENA_PM",
            "KAI_CLIENT_PM",
            "KAI_CLIENT_INVITE",
//            "KAI_CLIENT_METRICS",
//            "KAI_CLIENT_LOCAL_DEVICE",
//            "KAI_CLIENT_REMOTE_ARENA_DEVICE",
//            "KAI_CLIENT_STATUS",
            "KAI_CLIENT_DETACH",
//            "KAI_CLIENT_RELOAD",
//            "KAI_CLIENT_GAMECHANNEL",
//            "KAI_CLIENT_DBRESULT"
        ];

        _(commandNames).forEach(function(commandName) {

            EngineCommands[commandName] = (function(bits) {
                var base = EngineCommands[commandName];

                return function(bits) {
                    $j(document).trigger(commandName, {bits: bits});
                    //var now = new Date();
                    //console.log(now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '.' + now.getMilliseconds() + ' ' + commandName);
                    base(bits);
                };
            })();
        });
    };

    return {
        init: init
    };

})();

app.triggerBinder.init();
