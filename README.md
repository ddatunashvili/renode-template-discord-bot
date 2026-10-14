# Discord bot on Renode

A discord.js bot with one slash command (`/ping`), already following every
Renode rule:

- The token is read from `DISCORD_TOKEN` in the environment (or a `.env` on the
  server), never from the repository.
- `npm run start` runs `node index.js`; there is nothing to build.
- A bot needs no port. If the server has one, a tiny health check answers on
  `0.0.0.0:$SERVER_PORT`, which is harmless.
- `.nvmrc` pins **Node 22**, which the Node.js egg offers.

## Deploy on Renode

1. Create your own repository from this template (**Use this template** on GitHub, or **Start from a template** on the panel's GitHub tab).
2. Order a server that runs it: an **App Runtimes → Node.js** plan, with **Nodejs 22** picked under *Runtime version*.
3. On the server's **GitHub** tab, connect GitHub and pick the new repository and its `main` branch, then **Deploy**.
4. Create a bot at https://discord.com/developers/applications, copy its token, and upload a `.env` containing `DISCORD_TOKEN=...` through the **Files** tab.
5. Invite the bot to your server with the `bot` and `applications.commands` scopes.
6. Start the server. The console shows the install, then the app.

## Run it locally

```bash
npm install
DISCORD_TOKEN=... npm start
```
