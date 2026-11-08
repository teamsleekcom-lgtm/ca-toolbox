# CA Toolbox — Status

> **What you need to know:** the one page to read routinely. The site is live, free and static. Decisions are in [decisions.md](decisions.md); the working rules are in [../AGENTS.md](../AGENTS.md); the session notes are in [handoff.md](handoff.md).
> **Last updated:** 2026-11-09.

## Where we are

**LIVE at https://catoolbox.in.** It is a free, public directory of Excel templates, calculators and checklists for Chartered Accountants. The site is static, served by GitHub Pages from the repository root. There are no accounts, no server and no database. It costs ₹0 per month.

## What is live

- **11 tools hosted on the site:** GSTR-2B reconciliation, e-Signer, computation of income, UDIN register, litigation tracker, payroll, bank reconciliation, fixed assets, GSTR-1 reconciliation, TDS extractor, and GST PDF to Excel.
- The tool list the site reads: `data/tools.json`.
- Submissions arrive through a **LinkedIn Page direct message**. The link only works for a signed-in visitor, and Page messaging must be enabled.
- The repository is public. `reviewflags.md` stays local and is excluded from the public repository.

## Next up

1. **Pollu names the next outcome:** more hosted tools, a submission queue, or promotion.
2. **Add an email fallback to the submission path** (T-030). It removes the LinkedIn sign-in barrier.
3. Decide whether to add simple usage measurement.

## Risks

1. **One fragile intake.** A logged-out visitor cannot submit. If Page messaging is off, the only path is closed.
2. **No usage data.** There is no evidence of which tools are used.
3. **Public repository.** Code and tool pages are visible to everyone. Review notes must stay local.

## Decisions

See [decisions.md](decisions.md).

## Please test

1. Open the site on a phone and check that the tool cards and menus work.
2. Try **Submit a Tool** while signed out, then while signed in.
3. Confirm Page messaging is on for the LinkedIn Page.
