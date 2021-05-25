const ytdl = require('ytdl-core');
const queue = [];

module.exports = async (msg, args) => {
	const search = require('./search');
	const searchResult = await search(args);

	if (ytdl.validateURL(searchResult.url)) {
		const connection = await msg.member.voice.channel.join();

		const dispatcher = require('./__dispatcher');
		dispatcher(connection, searchResult.url);
		return searchResult;
	}
};
