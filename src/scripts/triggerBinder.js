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
            "KAI_CLIENT_JOINS_VECTOR",
            "KAI_CLIENT_LEAVES_VECTOR",
            "KAI_CLIENT_VECTOR",
            "KAI_CLIENT_CONTACT_ONLINE",
            "KAI_CLIENT_CONTACT_OFFLINE",
            "KAI_CLIENT_ARENA_PM",
            "KAI_CLIENT_PM",
            "KAI_CLIENT_INVITE",
            "KAI_CLIENT_DETACH",
            "KAI_CLIENT_CHAT",
            "KAI_CLIENT_CHAT2"
        ];

        _(commandNames).forEach(function(commandName) {

            EngineCommands[commandName] = (function(bits) {
                var base = EngineCommands[commandName];

                return function(bits) {
                    $j(document).trigger(commandName, {bits: bits});
                    base(bits);
                };
            })();
        });
    };

    return {
        init: init
    };

})();

