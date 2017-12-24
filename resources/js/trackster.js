var Trackster = {};
const API_KEY =	'1ec280cdca68e1d220c1bd37ce0fd712';

$(document).ready(function() {


  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    datatype: 'jsonp',
    success: function(data) {
      console.log(data);
    }
  });

};

/* LastFM data:
Application name	chip-l-trackster
API key	1ec280cdca68e1d220c1bd37ce0fd712
Shared secret	79e61ca5a8bd485f8a20a6b49197456e
Registered to	Chip-L
*/
