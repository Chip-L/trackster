# trackster

Codecademy project. Unit 9 bonus project - a music track listener

"In this project, you will build a music search app using the MusicGraph API (https://developer.musicgraph.com/). The app has a text input field and a search button. When a user inputs some text and clicks the button, the app will search MusicGraph's database for songs related to that text. When the API request is complete, the app displays each song found in a list. The user can then sort the list in a number of ways and listen to a sample of each song via a play button."

The initial specs are in the MISC folder in resources. When complete the Codecademy solution will be there too.

Codecademy's working site is here: https://s3.amazonaws.com/codecademy-content/projects/trackster/index.html - it doesn't appear to sort.

# My notes and observations:
So the description says this uses MusicGraph and links to that API. In actuality, when you get in to the steps, it uses LastFM (https://www.last.fm/api). Fortunately the steps provide the proper links.

I changed the main body to a table. This made more sense in my mind than doing it as a bunch of rows. Bootstrap will control the table as well. IMO it made the script easier to read too.

I added in functionality to expand the album image.

I catch missing images and use a Font-Awesome icon there instead.

Instead of writing my own sort function, I used the stupidtable.js plugin (https://github.com/joequery/Stupid-Table-Plugin).

The way this displays works for me now. I could do more in trying to get more information. However, that would mean using both APIs. In order to do this I would need to do a query against both APIs and then match the data (mbid from LastFM and track_musicbrainz_id from MusicGraph). I don't know if all of the data acutally has that same ID and there could be multiple returns on it too. This would take much more research. The good thing about MusicGraph is that it gives a real YouTube ID to play off of rather than that thing on Last FM.
