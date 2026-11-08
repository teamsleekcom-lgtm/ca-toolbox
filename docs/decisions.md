# CA Toolbox — Decision Log

> **What you need to know:** the project's own record of decisions. Newest first. Every entry says what was decided, when, why, what else was considered and what follows. A decision that exists only in chat is not recorded.
> The working rules are in [../AGENTS.md](../AGENTS.md).

---

## ADR-002 — Submissions use a LinkedIn Page direct message until an email fallback exists

**Status:** Accepted
**Date:** 2026-11-09 (recorded; the practice was already in place)
**Context:** The site has no backend and no accounts. A visitor needs a way to send a tool for review. A form would need a server, spam control and a database, which the site does not have.
**Decision:** The **Submit a Tool** link opens a direct message to the CA Toolbox LinkedIn Page. An email fallback can be switched on later by setting one value in the page. The LinkedIn path stays until the fallback is tested.
**Alternatives:** (a) A web form — rejected: it needs a backend, spam control and storage. (b) A plain email link now — not rejected, but not supplied yet. (c) No submission path — rejected: the directory would stop growing.
**Consequences:** A logged-out visitor must sign in to LinkedIn before sending. Page messaging must be on. The email fallback is a P1 task (T-030).
**Source:** `README.md` and `AGENTS.md`.

## ADR-001 — The site stays free, static and account-free

**Status:** Accepted
**Date:** 2026-11-02
**Context:** The project is a free public directory for Chartered Accountants. The value is zero cost and zero friction for the visitor.
**Decision:** The site stays a static GitHub Pages site. There are no accounts, no server, no database and no paid tier. Tools are either hosted as single-file pages or listed as external links.
**Alternatives:** (a) A login and paid tier — rejected: it adds cost, support and a reason to say no. (b) A server-backed directory — rejected: it adds hosting, security and maintenance for no current gain.
**Consequences:** The site is cheap and fast. It cannot store user data. Any feature that needs a backend is out of scope unless the promise changes.
**Source:** `AGENTS.md` and `README.md`.
