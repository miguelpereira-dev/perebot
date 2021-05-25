require('dotenv/config');
const path = require('path');

const commando = require('discord.js-commando');

const bot = () => {
	const client = new commando.CommandoClient({
		owner: '401087598883504141',
		commandPrefix: require('./config.json').prefix,
	});

	client.on('commandRegister', (command) =>
		console.log(`Registrando comando: [${command.name}]`)
	);

	client.on('ready', async () => {
		client.registry
			.registerGroups([
				['misc', 'Miscelaneous commands'],
				['moderation', 'Moderation commands'],
				['music', 'Channel music commands'],
			])
			.registerCommandsIn(path.join(__dirname, 'commands'));

		console.log('Bot ready');
	});

	client.login(process.env.TOKEN);
};

module.exports = bot;
