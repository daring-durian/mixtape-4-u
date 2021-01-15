const passport = require('passport')
const router = require('express').Router()
const SpotifyStrategy = require('passport-spotify').Strategy

if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
  console.log('Spotify client ID / secret not found. Skipping Spotify OAuth.')
} else {
  const spotifyConfig = {
    clientID: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    callbackURL: process.env.SPOTIFY_CALLBACK
  }

  passport.use(
    new SpotifyStrategy(spotifyConfig, function(
      accessToken,
      refreshToken,
      expires_in,
      profile,
      done
    ) {
      User.findOrCreate({spotifyId: profile.id}, function(err, user) {
        return done(err, user)
      })
    })
  )

  router.get('/', passport.authenticate('spotify'))

  router.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', {failureRedirect: '/login'}),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/')
    }
  )
}
