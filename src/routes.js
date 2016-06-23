import StatsController from './controllers/StatsController';
import NotFoundController from './controllers/NotFoundController';
import ErrorController from'./controllers/ErrorController';

export default class Routes {

	static setup(app) {
		app.get('/', StatsController.index);

		// 404 and Error
		app.use(NotFoundController.notFound);
		app.use(ErrorController.error);
	}

}
