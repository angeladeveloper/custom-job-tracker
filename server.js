const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controller');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: '🔐Super Secret🔐',
    cookie: {
        "egg": "You've been licked by Trevor🐶"
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// *  -- Inform Express.js on which template engine to use
// todo ✅  I am using handlebars here, but I want to try EJS
// todo  Set up Handlebars.js engine with custom helpers
// const hbs = exphbs.create({ helpers });

app.engine('hbs', exphbs(
  {
    defaultLayout: 'main',
    extname: '.hbs'
  }));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🚀Now listening👂 on localhost:${PORT}`));
});
