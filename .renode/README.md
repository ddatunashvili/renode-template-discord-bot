# .renode

This folder belongs to the Renode panel.

When this repository is linked to a Renode server and **Keep AI context in the
repository** is switched on (GitHub tab), the panel opens a pull request that
adds `.renode/server.md` here: how that particular server boots, its port, its
variables and its limits. It also refreshes the marked block in `CLAUDE.md` and
`AGENTS.md` (between `<!-- renode:start -->` and `<!-- renode:end -->`).

Nothing in this folder is read when the server starts, and nothing secret is
ever written into it. Write your own notes outside the markers, not in here.
