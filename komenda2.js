module.exports = {
	name: 'palecki',
	description: 'Wysyła zdjęcie wózka widłowego!',
	execute(message, args, photoFile) {
		message.channel.send(`${message.author} Oto Twój dzisiejszy Paleciak: `, {files:photoFile});
	},
};