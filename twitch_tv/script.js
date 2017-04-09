// for info on API pass through see: https://wind-bow.gomix.me/
//twitch API https://wind-bow.gomix.me/twitch-api
// /users/:user 
// API documentation https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamschannel
// array of usernames: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
// CHANNELS 'https://wind-bow.gomix.me/twitch-api/channels/' + userName + '?callback=?'
// STREAM 'https://wind-bow.gomix.me/twitch-api/streams/' + userName + '?callback=?'
// fake account "storbeck",
var userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "comster404", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "streamerhouse", "storbeck"];

$(document).ready(function() {
  //get channel 
  for (var i = 0; i < userArray.length; i++) {
    (function(i){
    $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + userArray[i] + '?callback=?', function(data) {
      if (data.display_name === undefined && data.url === undefined) {
        $("#channel-name").append("Channel not found");
        $("#channel-logo").append("NA"); 
        $("#channel-status").append("STATUS ERROR");
      } else {
        event.preventDefault();
        $("#channel-logo").append('<li style="list-style:none"><img src="' + data.logo + '" alt="channel logo" /> </li>');
        $("#channel-name").append('<li style="list-style:none"> <a href="' + data.url + '"target="blank"> <span>' + data.display_name + '</span>' + '</a> </li>');
        $("#channel-status").append(`<li id='status_${userArray[i]}' style="list-style:none"></li>`);
        //console.log(data.display_name);
        //console.log(data.url);

      }
  // get status
   $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + userArray[i] + '?callback=?', function(status) {
      // if statement to see whether channel is online
      if (status.stream === null) {
        
         $(`#status_${userArray[i]}`).html('Offline');
          } else {
            $(`#status_${userArray[i]}`).html('ONLINE Streaming: ' + status.stream.game);
          }
    })
    });
    })(i)
    }
});
    