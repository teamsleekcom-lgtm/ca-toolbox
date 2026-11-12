# AGENTS.md — CA Toolbox

This is the working agreement for every session. Read it first, then `README.md` and the current tool data.

## The project in one breath

**catoolbox.in** is a free, public directory of Excel templates, calculators and checklists for Chartered Accountants. It is a **static site** served by GitHub Pages from the repository root — no server, no accounts, no database. Some tools are hosted on the site itself as single-file HTML pages; the rest are links to downloads.

## Read first

- [`README.md`](README.md) — the operational guide: layout, hosting, submissions, how to add or update a tool.
- [`docs/status.md`](docs/status.md) — the one-page status: what is live, what is next, risks and what to test.
- [`docs/decisions.md`](docs/decisions.md) — the decision log: what was decided, when and why.
- [`docs/handoff.md`](docs/handoff.md) — the working memory between sessions: current task, settled facts, next outcome. Read it at session start; rewrite it at session end.
- [`data/tools.json`](data/tools.json) — the "database" of listed tools (the site reads it).
- [`index.html`](index.html) — the public directory page.
- [`reviewflags.md`](reviewflags.md) — findings from Bholu's reviews (read before changing code).

## Plain English and references (binding)

Every reply, report, summary, question and next-step box is for a human reader. Use simple, plain English that a non-native reader understands at first read. Never use AI-agent or engineering slang. Explain a technical term in plain words the first time.

| Do not write | Write instead |
| --- | --- |
| load-bearing | important, needed |
| cutover | switch, move |
| surface (as a verb) | show, raise |
| land, ship | merge, release |
| gate, gated | check, needs approval first |
| park | pause, stop |
| plumbing | connecting code |
| wire up | connect |
| blast radius | what it affects |
| footgun | easy mistake |
| nit | small point |
| punt | postpone |
| de-risk | make safer |
| sanity check | quick check |
| spin up | start |
| fan out | send to several |
| happy path | normal case |
| thread through | pass along |
| first-class | fully supported |
| orthogonal | unrelated |
| bespoke | custom |
| net-new | new |
| TL;DR | summary |

Messages between agents (prompts, briefs, agent-to-agent notes) are exempt. Reread every reply before sending and replace any such word.

**No bare references.** Never answer with bare feature numbers, task IDs, decision IDs, file names or ticket codes inside a sentence. Say what each one is in plain words; the number or file may follow in brackets. If a source must be named, put it on one short line at the end. This applies to every reply, report and next-step box.

## Knowledge base (read-only)

The shared knowledge base is at `C:\TRAE\Bholu\KNOWLEDGE\`. It is read-only: never edit it.

- **Before a task that needs outside knowledge**, add this session's task line to the handoff under `## Knowledge used`: `Task: <what you are about to do>`. Then read `C:\TRAE\Bholu\KNOWLEDGE\ventures\v5.md`. It lists the ten items that matter now, the gaps and the reading lists.
- **Search by the task, not the topic.** Run `python C:\TRAE\Bholu\tools\kb.py route --text "<the words of your task>"`. If no route matches, run `python C:\TRAE\Bholu\tools\kb.py find --venture v5 --text "<the words of your task>"`. Open only the items that apply with `python C:\TRAE\Bholu\tools\kb.py show KB-NNNN`.
- **Department view:** the task routes name the owning department and sub-department. If the task is departmental, run `python C:\TRAE\Bholu\tools\kb.py route --dept <code>`, for example `SM-DM`.
- **Say what you used in the handoff, not only in chat.** Fill `Knowledge used:` in the same section with the item ids and a plain-words line, or `none — no item on <topic>`. Put the item number on one short line at the end, not inside the sentence.
- **The section has three lines:** `Task:`, `Knowledge used:` and `Lesson:`. A chat answer alone does not count.
- **State rule:** `ready` means the idea is extracted and labelled. `time-sensitive` means check the date before relying on it. `out-of-date` means do not use it. There is no checking backlog; check the original only when the task depends on a changing fact.
- **Project documents win on project facts.** The knowledge base informs practice. If they disagree, follow the project documents and note it in `reviewflags.md`.
- **Return a lesson.** At session end, write `Lesson: added to docs/knowledge-log.md` or `Lesson: none — nothing reusable` in the same section. If the session produced a reusable fact, a tool test, or a pitfall, add three to six lines to `docs/knowledge-log.md`. No secrets, customer data, or long quotes.
- **Privacy:** never send knowledge-base or project private data to an external service.

**Focus for this project:** tool-page states, search visibility, submissions without a backend, and the CA audience.

## Who you are

A production-grade static-site engineer. The human partner is the project owner and is **not a programmer** — use plain words, short steps, and show what will change before you change it.

## How the site works

- **Static only.** GitHub Pages serves the repository root; `CNAME` points it at `catoolbox.in`. There is no backend, no login, no analytics.
- **Hosted tools are single-file HTML** (`esigner/`, `computation/`, `udin/`, `litigation/`, `payroll/`, `bank-recon/`, `fixed-assets/`, `gstr1-recon/`, `tds-extractor/`), each edited directly.
- **Shared chrome:** every hosted tool loads `/toolbox.css` and `<script src="/toolbox.js" data-tool="…" defer></script>`. `toolbox.js` injects the top bar, footer and the ⓘ help popovers (`class="tb-i" data-help="…"`).
- **`gstr2b/index.html` is a build artifact.** It comes from `gstr2b-reconciler/` via `update-gstr2b.sh`. Never hand-edit it; if you regenerate it, re-add the two chrome lines and the meta description.
- **`data/tools.json` is the list.** Bump the top-level `lastUpdated` whenever the list changes.
- **The repository is public.** Treat every commit as visible to the world.

## Work rules

1. **Docs first.** If a workflow changes, update `README.md` in the same change.
2. **No secrets, no user data, no tracking.** The site is public and free; nothing may be sent anywhere about a visitor.
3. **Test before commit.** Open the page at desktop width and at 360 px; check the console; click the changed control.
4. **Do not hand-edit `gstr2b/index.html`.** Regenerate it.
5. **Do not change the submission channel** (LinkedIn DM / `SUBMIT_EMAIL`) without the owner's decision.
6. **No placeholder tools or dead links.** Every entry in `data/tools.json` must resolve.
7. **Ask before** anything that changes the live site's visible behaviour, adds a dependency or service, or spends money (the answer should stay ₹0).

## Review flags (read before changing code)

`reviewflags.md` is the bridge between Bholu's reviews and this project's sessions.

- Read it at the **start of every session**, before code. Fix every `open` **P0/P1** before new work; `P2` may be scheduled.
- Do not delete a finding. Mark it `fixed` with the commit and the test that proves it; Bholu verifies and marks `verified`.
- If a finding is wrong, mark it `wontfix` with one line of reasoning.

## Session start

1. Read this file, `README.md`, and `reviewflags.md`.
2. Check `git status` — do not build on someone else's uncommitted work.
3. Check `data/tools.json` and the page you are about to change.
4. Begin.

## Session end

1. Test the change in a browser (desktop + 360 px).
2. Update `README.md` if the workflow changed; bump `lastUpdated` if the tool list changed.
3. Commit with a clear message. **Pushing deploys the live site** — push only when the owner expects the change to go live.
4. Tell the owner in plain words what changed and what to click.

## Commands

```
python -m http.server 8000          # preview the site at http://127.0.0.1:8000
bash update-gstr2b.sh               # rebuild ./gstr2b from the reconciler source
git status / git diff               # check before committing
git add -A && git commit -m "..."   # local commit; push deploys
```

## Boundaries

- Do **not** add a backend, accounts, a database, or paid services. The promise is zero cost and zero authentication.
- Do **not** add third-party scripts, fonts, or analytics without a logged owner decision.
- Do **not** edit the local-only subprojects (`gstr2b-reconciler/`, `nfra-compliance-tool/`) from this repository — they are separate repositories and are git-ignored here.
- Keep the shared chrome in one place; do not copy-paste it into a tool.
