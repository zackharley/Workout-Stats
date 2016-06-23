export default class NotFoundController {

	static notFound(req, res) {
	  	res.status(404).render('404');
	}

}
