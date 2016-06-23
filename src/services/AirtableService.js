import airtable from 'airtable';

export default class AirtableService {

	static getBase() {
		return airtable.base('appQWFwBCrZY4ejmv');
	}

	static getChestTrisInfo() {
		const base = this.getBase();
		return new Promise((resolve, reject) => {
			base('Chest/Tri\'s').find('recg09TNE4lp0M49N', (err, record) => {
			    if(err) {
			    	reject(error);
			    } else {
			    	resolve(record);
			    }
			});
		});

	}

}
