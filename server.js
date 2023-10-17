const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => { // synchronizes all models at once, but does not drop tables if they already exist. the 'force' parameter is false because 'npm start' is run after 'npm run seed' and we do not want to lose the data we already have in our tables. source: https://sequelize.org/docs/v7/models/model-synchronization/
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
