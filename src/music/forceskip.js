const dispatcherMain = require('./__dispatcher');

module.exports = {
	commands: ['forceskip', 'fs', 'skip'],
	permissionError: 'You do not have permission to use this command.',
	callback: async (message, args, text) => {
		if (message.member.voice.channel && dispatcherMain) {
			const { dispatcher, videoDetails} = dispatcherMain.ret;

			await dispatcher.destroy();
			message.channel.send(
				`Parando música [${videoDetails.title}] do canal [${message.member.voice.channel.name}]`
			);
		}
	},
};
