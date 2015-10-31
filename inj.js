$.getScript('http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js');
$.getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');

$(function () {
    window.onPlayerEvent = function (data) {
        data.forEach(function(event) {
            if (event.event == "playerInit") {
                var player = $("#player")[0];
                player.playVideo();
                player.mute();
                console.log("here")
            }
        });
    }

    swfobject.embedSWF("//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf", "twitch_embed_player", "640", "400", "11", null,
        { "eventsCallback":"onPlayerEvent",
            "embed":1,
            "channel":"day9tv",
            "auto_play":"true"},
        { "allowScriptAccess":"always",
            "allowFullScreen":"true"});
});

//<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
