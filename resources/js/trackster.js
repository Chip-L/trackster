var Trackster = {};
const API_KEY =	'1ec280cdca68e1d220c1bd37ce0fd712';

$(document).ready(function() {
  $('#search-button').click(function() {
    Trackster.goSearch();
  });

  $('#search-input').keypress(function(event) {
      if (event.keyCode == 13) {
        Trackster.goSearch();
      }
  });

}); // end doc.ready()

/*
  Handles the search function. Once the search has been requested, check to
  make sure it is valid and if it is, call the search and populate the tracks.
*/

Trackster.goSearch = function() {
  searchValue = $('#search-input').val();

  if(searchValue.length > 0) {
    Trackster.searchTracksByTitle(searchValue);
  };

}; // end goSearch()

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function (tracks) {
  console.log('renderTracks');
  var $trackBody = $('#track-list tbody');

  $trackBody.empty();

  for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
    var track = tracks[trackIndex];
    var trackImage = "";

    if(track.image[3]['#text'] !== "") {
      trackImage = track.image[3]['#text'];
    } else if(track.image[2]['#text'] !== "") {
      trackImage = track.image[2]['#text'];
    } else if(track.image[1]['#text'] !== "") {
      trackImage = track.image[1]['#text'];
    } else { //  if(track.image[0]['#text'] <> "") and if it does, assign ""
      trackImage = track.image[0]['#text'];
    };

    $trackBody.append('<tr>');
    var $row = $('#track-list tbody tr:last');

    $row.append('<td></td>');
    $row.append('<td><a href="'+ track.url + '" target="_blank" rel="noreferrer noopener">' +
    '      <i class="fa fa-play-circle-o fa-3x play-button" aria-label="play"></i>' +
    '    </a></td>');
    $row.append('<td>' + track.name + '</td>');
    $row.append('<td>' + track.artist + '</td>');

    if(trackImage !== "") {
      $row.append('<td>' +
      '    <div class="img-container"> ' +
      '      <img src="' + track.image[3]['#text'] + '" alt="Alblum cover">' +
      '    </div>' +
      '  </td>');
    } else {
      $row.append('<td>' +
      '    <div class="img-container"> ' +
      '      <i class="fa fa-picture-o" aria-hidden="true"></i>' +
      '    </div>' +
      '  </td>');
    }

    $row.append('<td>' + track.listeners + '<td>');
  } // end for
}

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracksNotTable = function(tracks) {
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

    listeners = numeral(listeners).format(0,0);

    var htmlString = '<div class="row"> ' +
    '    <div class="col-xs-1 col-xs-offset-1 "> ' +
    '      <a href="' + trackURL + '" target="_blank" rel="noreferrer noopener"> ' +
    '        <i class="fa fa-play-circle-o fa-2x play-button" aria-label="play"></i> ' +
    '      </a> ' +
    '    </div> ' +
    '    <div class="col-xs-3">' + song + '</div> ' +
    '    <div class="col-xs-3">' + artist + '</div> ' +
    '    <div class="col-xs-2"> ' +
    '      <div class="img-container"> ' +
    '        <img src="' + albumArtURL + '" alt="Alblum Name cover"> ' +
    '      </div> ' +
    '    </div> ' +
    '    <div class="col-xs-2">' + listeners + '</div> ' +
    '  </div>';

    // console.log(htmlString);
  //  $trackList.append(htmlString);
  }
}; // end renderTracks()

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  console.log('url: http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',);
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    datatype: 'jsonp',
    success: function(data) {
      // console.log(data);
      Trackster.renderTracks(data.results.trackmatches.track);
    }
  }); // end of ajax
}; // end searchTracksByTitle

/* LastFM data:
Application name	chip-l-trackster
API key	1ec280cdca68e1d220c1bd37ce0fd712
Shared secret	79e61ca5a8bd485f8a20a6b49197456e
Registered to	Chip-L
*/

/* Musicgraph data:
API key 623089f48d2821b33b856864e847a9b3
*/
