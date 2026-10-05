# The CA Toolbox

Professional tools by Chartered Accountants, for Chartered Accountants.
**Zero cost. Zero authentication. Open source.**

## 🎯 What is This?

A simple directory of Excel templates, calculators, and checklists created by CAs. Everything is free and runs at zero cost using GitHub.

## 🌐 Live Site

Visit: **https://catoolbox.in** (also served at https://teamsleekcom-lgtm.github.io/ca-toolbox/)

## 📤 How to Submit a Tool

1. Visit the website
2. Click "Submit a Tool" — it opens a **direct message to our LinkedIn Page** (`messaging/thread/new/?recipient=116474011`)
3. Message us the tool details and link
4. We review and add it to `data/tools.json`

> To switch submissions to **email**, set `SUBMIT_EMAIL` at the top of the `<script>` block in `index.html` — every Submit link then becomes a pre-filled `mailto:` instead. Leave it `''` to keep the LinkedIn DM.

> Note: the DM link only works for visitors signed in to LinkedIn (logged-out users get LinkedIn's login screen first, then continue to the message). It also requires **Page messaging to be enabled** in the Page's admin settings.

## 🧰 Tools hosted on this site

Some tools are hosted right here as part of the site, in addition to external listings:

| URL | Tool | Source of truth |
|-----|------|-----------------|
| `/gstr2b/` | GSTR-2B Reconciliation Tool | `gstr2b-reconciler/` (separate repo) |

After changing the reconciler's code, refresh the hosted copy:

```bash
bash update-gstr2b.sh   # builds it and updates ./gstr2b
git add gstr2b && git commit -m "Update GSTR-2B tool build" && git push
```

`tools.json` entries for hosted tools can use `linkLabel: "Open Tool"` and point at their on-site path.

## 📁 Repository Layout

This repository **is** the website — GitHub Pages serves it at the repository root.

The working folders below are **local development copies of the tool projects themselves**, not part of the deployed site (they are listed in `.gitignore` and each has its own git repository):

```
CAToolbox/
├── index.html              # The site (public tool directory)
├── favicon.svg             # Site icon
├── robots.txt / sitemap.xml
├── CNAME                   # Custom domain: catoolbox.in
├── data/
│   └── tools.json          # The "database" of listed tools
├── gstr2b/                 # Hosted tool: GSTR-2B Reconciler (built copy — do not edit by hand)
├── update-gstr2b.sh        # Rebuilds ./gstr2b from the reconciler source
├── releases/               # Optional file storage for tool downloads
├── .github/
│   └── ISSUE_TEMPLATE/     # Legacy tool-submission form (submit via LinkedIn/email now)
├── nfra-compliance-tool/   # [local only] nfratools.in source
└── gstr2b-reconciler/      # [local only] GSTR-2B reconciliation tool source
```

## 📦 Adding Tools (Admin Guide)

### Workflow: Delegated Submissions
1.  **Users** submit tools via the "Submit a Tool" button (LinkedIn).
2.  **You (Admin)** review the submission.
3.  **To Add a Tool:** update `data/tools.json` (manually, on GitHub, or via your developer) and commit.

### Method 1: Using GitHub Releases (Recommended)

```bash
# Upload a tool file
gh release create v1.0 path/to/your-tool.xlsx \
  --title "Tool Name v1.0" \
  --notes "Description of the tool"

# This creates a permanent URL:
# https://github.com/teamsleekcom-lgtm/ca-toolbox/releases/download/v1.0/your-tool.xlsx
```

### Method 2: Using External Links
- Users can share Google Drive, Dropbox, or any public link

### Tool entry fields

| Field | Required | Notes |
|-------|----------|-------|
| `id` | ✅ | Any unique string |
| `name` | ✅ | Shown in the table |
| `creator` | ✅ | Person or firm name |
| `downloadUrl` | ✅ | Where the tool lives (https:// links) |
| `description` | ✅ | One or two lines |
| `category` | Optional | Shown as a badge (e.g. Audit, GST) |
| `icon` | Optional | Emoji shown on the card (e.g. 🧾) |
| `color` | Optional | Card colour: blue, emerald, violet, amber, rose or cyan (rotates automatically if omitted) |
| `linkLabel` | Optional | Button text; defaults to "Open Tool" |
| `creatorUrl` | Optional | Link shown next to the creator name |
| `addedAt` / `lastUpdated` | Optional | ISO timestamps |

Bump the top-level `lastUpdated` when you change the list — the site displays it.

## 🛠️ Updating Tools

**Option 1: GitHub Web UI**
1. Go to: https://github.com/teamsleekcom-lgtm/ca-toolbox
2. Navigate to `data/tools.json`
3. Click edit, make changes, commit

**Option 2: Git Command Line**
```bash
git pull
# Edit data/tools.json
git add data/tools.json
git commit -m "Update tools"
git push
```

## 💰 Costs

| Item | Cost |
|------|------|
| GitHub Pages Hosting | $0 |
| GitHub Storage (1GB) | $0 |
| **Total** | **$0/month** |

## ❓ FAQ

**Q: Can users download without a GitHub account?**
A: Yes! The site is completely public.

**Q: Where should I store tool files?**
A: GitHub Releases (free, unlimited bandwidth) or Google Drive.

**Q: How do I delete a tool?**
A: Edit `data/tools.json` on GitHub and remove the entry.

## 📜 License

MIT License - Free to use and modify.

## 🤝 Contributing

1. Fork this repository
2. Make improvements
3. Submit a pull request

---

**Made with ❤️ by the CA Community**
