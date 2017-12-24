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
  var $trackList = $('#track-list');
  var trackURL = "",
    song = "",
    artist = "",
    albumArtURL = "",
    listeners = 0;

  $trackList.empty();

  for(var i = 0; i < tracks.length; i++) {
    trackURL = tracks[i].url;
    song = tracks[i].name;
    artist = tracks[i].artist;
    albumArtURL = tracks[i].image[3]['#text']; // I used the large image here so it can be expanded to show the art better (on click);
    listeners = tracks[i].listeners;


    var htmlString = '<div class="row"> ' +
    '    <div class="col-xs-1 col-xs-offset-1 "> ' +
    '      <a href="' + trackURL + '" target="_blank" rel="noreferrer noopener"><i class="fa fa-play-circle-o fa-2x play-button" aria-label="play"></i></a> ' +
    '    </div> ' +
    '    <div class="col-xs-3">' + song + '</div> ' +
    '    <div class="col-xs-3">' + artist + '</div> ' +
    '    <div class="col-xs-2"> ' +
    '      <img src="' + albumArtURL + '" alt="Alblum Name cover"> ' +
    '    </div> ' +
    '    <div class="col-xs-2">' + listeners + '</div> ' +
    '  </div>';

    // console.log(htmlString);
    $trackList.append(htmlString);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  console.log('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json');

  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    datatype: 'jsonp',
    success: function(data) {
      // console.log(data);
      Trackster.renderTracks(data.results.trackmatches.track);
    }
  }); // end of ajax
};

/* LastFM data:
Application name	chip-l-trackster
API key	1ec280cdca68e1d220c1bd37ce0fd712
Shared secret	79e61ca5a8bd485f8a20a6b49197456e
Registered to	Chip-L
*/
