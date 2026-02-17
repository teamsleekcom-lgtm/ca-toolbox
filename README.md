# The CA Toolbox

Professional tools by Chartered Accountants, for Chartered Accountants.  
**Zero cost. Zero authentication. Open source.**

## 🎯 What is This?

A simple directory of Excel templates, calculators, and checklists created by CAs. Everything is free and runs at zero cost using GitHub.

## 🌐 Live Site

Visit: **https://teamsleekcom-lgtm.github.io/ca-toolbox/**

## 📤 How to Submit a Tool

1. Visit the website
2. Click "Submit a Tool"
3. Fill the form
4. Complete the GitHub issue that opens
5. Wait for admin approval

## 🔧 Setup (Already Done!)

Repository: https://github.com/teamsleekcom-lgtm/ca-toolbox

### Next Steps

```bash
# 1. Clone the repository
git clone https://github.com/teamsleekcom-lgtm/ca-toolbox.git
cd ca-toolbox

# 2. Create folder structure (if not exists)
mkdir -p data releases .github/ISSUE_TEMPLATE

# 3. Add all generated files to the repository
# Copy: index.html, admin.html, data/tools.json, etc.

# 4. Commit and push
git add .
git commit -m "Add CA Toolbox platform files"
git push origin main

# 5. Enable GitHub Pages
gh repo edit --enable-pages --pages-branch main --pages-path /

# Or via GitHub web interface:
# Settings → Pages → Source: main branch → Save

# 6. Wait 2-3 minutes, then visit:
# https://teamsleekcom-lgtm.github.io/ca-toolbox/
```

## 📦 Adding Tools (Admin Guide)

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
- No file size limits
- Admin just copies the link

### Adding to Database

1. Go to admin panel: `https://teamsleekcom-lgtm.github.io/ca-toolbox/admin.html`
2. Fill the "Add New Tool" form
3. Click "Generate JSON Entry"
4. Copy the generated JSON
5. Click "Edit tools.json" button (or go to: https://github.com/teamsleekcom-lgtm/ca-toolbox/edit/main/data/tools.json)
6. Paste the JSON into the `tools` array
7. Commit the changes on GitHub
8. Wait 2-3 minutes for GitHub Pages to update

## 📊 File Structure

```
ca-toolbox/
├── index.html           # Public directory
├── admin.html          # Admin panel
├── data/
│   └── tools.json      # Database
├── releases/           # Optional file storage
├── .github/
│   └── ISSUE_TEMPLATE/ # Submission form
└── README.md
```

## 💰 Costs

| Item | Cost |
|------|------|
| GitHub Pages Hosting | $0 |
| GitHub Storage (1GB) | $0 |
| Domain (github.io) | $0 |
| **Total** | **$0/month** |

## 🔒 Admin Access

- Admin panel URL: `https://teamsleekcom-lgtm.github.io/ca-toolbox/admin.html`
- Keep this URL private (not publicly linked)
- Anyone can access if they know the URL
- All changes require GitHub account

## 🛠️ Updating Tools

**Option 1: GitHub Web UI**
1. Go to: https://github.com/teamsleekcom-lgtm/ca-toolbox
2. Navigate to `data/tools.json`
3. Click edit button
4. Make changes
5. Commit

**Option 2: Git Command Line**
```bash
git pull
# Edit data/tools.json
git add data/tools.json
git commit -m "Update tools"
git push
```

## ❓ FAQ

**Q: Can users download without a GitHub account?**  
A: Yes! The site is completely public.

**Q: Where should I store tool files?**  
A: GitHub Releases (free, unlimited bandwidth) or Google Drive.

**Q: How do I delete a tool?**  
A: Edit `data/tools.json` on GitHub and remove the entry.

**Q: Can I use a custom domain?**  
A: Yes! GitHub Pages supports custom domains for free.

## 📜 License

MIT License - Free to use and modify.

## 🤝 Contributing

1. Fork this repository
2. Make improvements
3. Submit a pull request

---

**Made with ❤️ by the CA Community**
