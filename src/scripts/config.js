app.config = (function() {

    var soundEvents = [
        'KAI_CLIENT_JOINS_VECTOR',
        'KAI_CLIENT_LEAVES_VECTOR',
        'KAI_CLIENT_PM',
        'KAI_CLIENT_ARENA_PM',
        'KAI_CLIENT_CONTACT_ONLINE',
        'KAI_CLIENT_CONTACT_OFFLINE',
        'KAI_CLIENT_DETACH',
        'KAI_CLIENT_INVITE',
        'KAI_CLIENT_CHAT'
    ];
    
    /* These correspond to the soundEvents array. */
    var defaultSounds = [
        'enter_1',
        'leave_1',
        'pm_2',
        'pm_1',
        'contact_online',
        'contact_offline',
        'detatch_1',
        'invite_2',
        'chat_2'
    ];

    return {
        soundEvents: soundEvents,
        defaultSounds: defaultSounds
    };

})();
