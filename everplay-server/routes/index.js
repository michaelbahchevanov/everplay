var express = require('express');
var router = express.Router();

var SpotifyWebApi = require('spotify-web-api-node');

var scopes = ['user-read-private', 
  'user-read-email', 
  'user-library-read', 
  'user-read-recently-played', 
  'user-read-currently-playing',
  'playlist-modify-public',
  'playlist-modify-private'],
  redirectUri = 'http://localhost:8888/callback',
  clientId = 'ebb268d0c5954240818782d505766fde',
  state = 'initial-test',
  clientSecret = '5a05592c2865477ba1cd49102a048511';

var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri,
});

var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);


router.get('/login', (req,res) => {
  console.log(authorizeURL);
  res.send(authorizeURL+"&show_dialog=true")  
})

router.get('/callback', async (req,res) => {
  const { code } = req.query;
  console.log(code)
  try {
    var data = await spotifyApi.authorizationCodeGrant(code)
    const { access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    res.redirect('http://localhost:3000/home');
  } catch(err) {
    res.redirect('/#/error/invalid token');
  }
});

router.get('/userinfo', async (req,res) => {
    try {
      var result = await spotifyApi.getMe();
      console.log(result.body);
      res.status(200).send(result.body)
    } catch (err) {
      res.status(400).send(err)
    }
});

router.get('/playlists', async (req,res) => {
  try {
    var result = await spotifyApi.getUserPlaylists();
    console.log(result.body);
    res.status(200).send(result.body);
  } catch (err) {
    res.status(400).send(err)
  }

});


module.exports = router;
