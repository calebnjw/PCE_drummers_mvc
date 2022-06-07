const express = require('express');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const pg = require('pg');

// import models
const db = require('./models/index.js');

// import controllers
const DrummerController = require('./controllers/drummerController.js');
const ReservationController = require('./controllers/reservationController.js');
// initialise controllers
const drummerController = new DrummerController(db.Drummer);
const reservationController = new ReservationController(db.Reservation);

// import routers
const DrummerRouter = require('./routers/drummerRouter.js');
const ReservationRouter = require('./routers/reservationRouter.js');
// initialise routers
const drummerRouter = new DrummerRouter(drummerController).router();
const reservationRouter = new ReservationRouter(reservationController).router();

// express app
const app = express();
// express middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/drummers', drummerRouter);
app.use('/reservations', reservationRouter);

app.set('view engine', 'ejs');

const PORT = 3004;
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));