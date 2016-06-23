export default class ErrorController {

	static error(err, req, res) {
	  	console.error(err.stack);
	  	res.status(500).render('error');
	}

}
