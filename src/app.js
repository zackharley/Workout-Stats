import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import Routes from './routes';

const app = express();

app.use(express.Router());
Routes.setup(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

const server = app.listen(process.env.PORT || 3000, () => {
  const {address, port} = server.address();
  console.log(`Workout Stats listening at http://${address}:${port}`);
});
