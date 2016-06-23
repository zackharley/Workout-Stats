import AirtableService from './../services/AirtableService';

export default class StatsController {

	static index(req, res) {
		AirtableService.getChestTrisInfo()
			.then((chestTrisInfo) => {
				res.json(chestTrisInfo._rawJson.fields);
			})
			.catch((error) => {
				res.status(500).send(error);
			});

		// res.render('index');
	}

}
