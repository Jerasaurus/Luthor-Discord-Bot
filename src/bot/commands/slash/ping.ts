import { SlashCommandBuilder } from '@discordjs/builders';
import client from "../../../index.js"
let command = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
//@ts-ignore
	async execute(interaction) {

		return interaction.reply(`Pong!🏓 \n Total Latency is ${ Date.now()-interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
	},
};

export default command