const fs = require('node:fs');
const http = require('node:http');
const { Client, Events, GatewayIntentBits } = require('discord.js');

// The token lives in a .env uploaded through the panel's Files tab, or in a
// Startup variable. Never in the repository.
if (fs.existsSync('.env')) {
    process.loadEnvFile('.env');
}

const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error('DISCORD_TOKEN is not set. Upload a .env with DISCORD_TOKEN=... through the Files tab.');
    process.exit(1);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async (ready) => {
    console.log(`Logged in as ${ready.user.tag}`);

    // A global /ping command. Global commands can take a little while to appear.
    await ready.application.commands.set([{ name: 'ping', description: 'Check that the bot is alive' }]);
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply(`Pong! ${Math.round(client.ws.ping)} ms`);
    }
});

client.login(token);

// A bot needs no port. If the server has one, answer a health check on it so
// an uptime monitor has something to ask; without one, nothing listens.
if (process.env.SERVER_PORT) {
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, ready: client.isReady() }));
    }).listen(Number(process.env.SERVER_PORT), '0.0.0.0', () => {
        console.log(`Health check on 0.0.0.0:${process.env.SERVER_PORT}`);
    });
}
