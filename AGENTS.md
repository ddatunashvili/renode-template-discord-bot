# Discord bot on Renode

A discord.js bot. `npm run start` runs `node index.js`.

Your own notes go here, above or below the Renode block. The panel only ever rewrites the text between the two markers.

<!-- renode:start -->
<!-- Maintained by the Renode panel. Everything between these markers is replaced when the server's settings change; write your own notes outside them. -->
## Renode server

This repository started from a Renode starter template. When it is deployed to a Renode server with "Keep AI context in the repository" switched on, the panel replaces this block with that server's own details and adds `.renode/server.md`.

- A bot needs no port. If you add a web server, listen on `0.0.0.0` on `SERVER_PORT`; no other port is reachable from outside.
- Keep `"start": "node index.js"` in `package.json`: the panel runs `npm run start`.
- The token is `DISCORD_TOKEN`, read from the environment.
- Only `/home/container` persists. No root, no apt, no systemd, no Docker.
- Never commit secrets. They go in a `.env` uploaded through the panel's Files tab, or in Startup variables, and are read from the environment.
- After pushing, restart the server from the panel to run the new commit, or switch on "Restart the server when someone pushes" on the GitHub tab.
- Fix the code, not the startup command or the Docker image.
<!-- renode:end -->
