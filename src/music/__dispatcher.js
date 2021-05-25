const ytdl = require('ytdl-core');

module.exports = async (connection, url) => {
	const dispatcher = connection.play(
		ytdl(url, {
			format: (format) => format.container === 'audioonly',
		}),
		{
			quality: 'highestaudio',
			volume: 0.2,
			highWaterMark: 1 << 25,
		}
	);

	const { title } = (await ytdl.getInfo(url)).videoDetails;

	dispatcher.on('start', () => {
		console.log(title + ' is now playing!');
	});

	dispatcher.on('finish', () => {
		console.log(title + ' has finished playing!');
		dispatcher.destroy();
	});

	dispatcher.on('error', console.error);
};
