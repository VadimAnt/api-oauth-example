const passport = require('passport');
const JwtStrategy = require('./strategies/jwt.strategy');
const LocalStrategy = require('./strategies/local.strategy');
const GoogleStrategy = require('./strategies/google.strategy');
const FacebookStrategy = require('./strategies/facebook.strategy');

passport.use(JwtStrategy);
passport.use(LocalStrategy);
passport.use(GoogleStrategy);
passport.use(FacebookStrategy);

module.exports = passport;