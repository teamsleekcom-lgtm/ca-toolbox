# CA Toolbox — Cross-session handoff

> **What you need to know:** This is the working memory between sessions: the current task, the facts already settled (do not re-research them), and the next step. Read it at the start of every session, after [../AGENTS.md](../AGENTS.md); rewrite it at the end of every session. This project has no other docs folder; [../README.md](../README.md) is the operational guide. Budget: ≤ 120 lines. Last written: 2026-11-08.

## Current task

**The site is live and free. The next outcome is not yet named, and naming it is the operator's call.**

Portfolio judgment recorded on 2026-11-02: the binding constraint is **supply and distribution, not code**. Ten good tools and a working submission path matter more than another feature. `[assumption]`

Do not start a feature until the operator names the next outcome.

## Settled facts (do not re-research)

- Live at **https://catoolbox.in** (also https://teamsleekcom-lgtm.github.io/ca-toolbox/). Static GitHub Pages served from the repository root; no server, no accounts, no database.
- `data/tools.json` is the tool list the site reads. `index.html` is the public directory page.
- **11 tools are hosted on the site** as single-file pages: `gstr2b`, `esigner`, `computation`, `udin`, `litigation`, `payroll`, `bank-recon`, `fixed-assets`, `gstr1-recon`, `tds-extractor`, `gst-pdf-to-excel`. The rest are external listings.
- **Submission path is a LinkedIn Page DM** (recipient 116474011). It needs the visitor signed in to LinkedIn and Page messaging enabled. To switch to email, set `SUBMIT_EMAIL` in `index.html`.
- **The repository is public.** `reviewflags.md` is git-ignored; findings stay local.
- Recent work: 2026-11-03 redesigned the tool cards and added GST PDF to Excel; 2026-11-05 organised the e-Signer toolbar into menus and renamed Images to Letterhead.

## Remaining steps

1. The operator names the next outcome for CA Toolbox (brain dashboard, next action 7).
2. Then scope that outcome here. No feature starts before it.

## Open questions

- Which outcome: more tools, more distribution, or an easier submission path?
- Is LinkedIn Page messaging enabled and monitored? It is the only intake; if not, the submission path is closed.

## Verification status

- Live at **catoolbox.in**; **11 hosted tools**; GitHub Pages; no accounts or backend.
- The submission path is a **LinkedIn Page direct message**.

## Leftovers

- Email fallback for submissions (T-030).
- Usage measurement; the next outcome waits on Pollu.

## Do not repeat

- Do not add accounts, a backend or paid tiers; the promise is free, no sign-in.
- Do not commit `reviewflags.md` to the public repository.
