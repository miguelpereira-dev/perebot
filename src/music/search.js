const ytsr = require('ytsr');

module.exports = async (args) => {
	search = args;

	const filters = (await ytsr.getFilters(search)).get('Type').get('Video');
	const searchResult = await ytsr(filters.url, { limit: 1 });
	return searchResult.items[0];
};
