# Gilberto Miranda — Portfolio Site

Professional portfolio site for job search and freelance opportunities.
Built with plain HTML, CSS, and JavaScript. No frameworks. No build step.

## Live URL

`https://beto-agent.github.io/portfolio/`

## File Structure

```
portfolio-site/
├── index.html          # Main site (all sections)
├── css/
│   └── style.css       # All styles (responsive, dark theme)
├── js/
│   └── main.js         # Navigation toggle, scroll handling
├── data/
│   └── profile.json    # Structured profile data (for future dynamic use)
└── README.md           # This file
```

## How to Publish on GitHub Pages

### Step 1: Create the Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `portfolio`
3. Set owner/account to `beto-agent`
4. Set to **Public**
5. Do NOT initialize with README (you already have one)
6. Click **Create repository**

### Step 2: Upload Files

**Option A — Git CLI (recommended):**

```bash
cd portfolio-site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/beto-agent/portfolio.git
git push -u origin main
```

**Option B — GitHub Web UI:**

1. On the repo page, click "uploading an existing file"
2. Drag and drop all files maintaining the folder structure
3. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to repo **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Select branch: **main**, folder: **/ (root)**
4. Click **Save**

### Step 4: Wait & Verify

- GitHub will build and deploy (usually 1-2 minutes)
- Visit `https://beto-agent.github.io/portfolio/`
- If it doesn't load immediately, wait 5 minutes and try again

## How to Update Content

### Quick edits (HTML)
Edit `index.html` directly. Changes deploy on push.

### Structured data
Edit `data/profile.json` to update experience, skills, or projects.
Future: the JS will fetch this file and populate the page dynamically.

### Styles
Edit `css/style.css`. The color scheme uses CSS custom properties at the top:
- `--color-accent` — primary accent color (currently `#4a8f`)
- `--color-bg` — background color
- `--color-text` — main text color

## TODO — Information Needed from Gilberto

These items are marked with `TODO` in the source files:

| Item | File | Status |
|------|------|--------|
| GitHub username/URL | `index.html`, `profile.json` | ❌ Needed |
| Professional email | `index.html`, `profile.json` | ⚠️ Placeholder set (`gilberto.miranda.pro@gmail.com`) — confirm or replace |
| LinkedIn URL | `index.html`, `profile.json` | ⚠️ Placeholder set — confirm URL is correct |
| PDF resume link | `index.html` | ❌ Needed — upload PDF and update link |
| 5th project | `index.html`, `profile.json` | ❌ Needed — add another project or remove placeholder |
| Earlier work positions | `index.html`, `profile.json` | ❌ Optional — pre-1999 roles if relevant |
| Recent certifications | `index.html`, `profile.json` | ❌ Optional — CCNA, AWS, Azure, etc. |
| Salary expectations | `profile.json` | ❌ Optional — for structured data |
| Phone number | `index.html`, `profile.json` | ⚠️ Currently using `(737) 222-3140` — confirm |

## Design Notes

- **Dark theme** — professional, low eye strain
- **No external dependencies** — no Google Fonts, no CDN, no npm
- **Responsive** — works on mobile, tablet, desktop
- **SEO-ready** — meta tags, Open Graph, JSON-LD structured data
- **Accessible** — semantic HTML, proper heading hierarchy, ARIA labels
- **Fast** — single HTML file, minimal CSS, no heavy JS

## License

Content: © 2026 Gilberto Miranda. All rights reserved.
Feel free to fork the structure for your own portfolio.
