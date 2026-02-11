# 📖 Grimoire

A lightweight static site generator that converts Markdown files into beautiful documentation websites.

**Repository:** https://github.com/TristanInSec/Grimoire

**Live Demo:** https://tristaninsec.github.io/Grimoire/

**Screenshot:** 

![Grimoire - Generated Documentation Website](screenshots/website.png)

## Features

- **Hierarchical Navigation** - Supports unlimited folder depth
- **YAML Frontmatter** - Define page metadata (title, date, custom fields)
- **Smart Display Names** - Auto-strips number prefixes, capitalizes acronyms
- **AJAX Navigation** - Smooth page transitions, browser history support
- **Full-Text Search** - Real-time search with highlighting
- **Auto Table of Contents** - Per-page TOC with scroll-aware highlighting
- **Bookmarks & Recent** - Persistent via localStorage
- **Dark/Light Theme** - Toggle with automatic persistence
- **Mobile Responsive** - Slide-out navigation on mobile
- **Syntax Highlighting** - Prism.js with extensible language support
- **SEO Ready** - Meta tags, sitemap, robots.txt generation

## Quick Start

### 1. Install Dependencies

```bash
pip install markdown pyyaml
```

### 2. Configure

Edit `config.json` for your site:

```json
{
  "site": {
    "name": "My Docs",
    "description": "Documentation for my project",
    "url": "https://docs.example.com"
  },
  "paths": {
    "content_folder": "input/notes",
    "output_folder": "output"
  }
}
```

### 3. Add Content

Create Markdown files in `input/notes/`:

```
input/notes/
├── 01-getting-started/
│   ├── installation.md
│   └── configuration.md
├── 02-guides/
│   ├── basics/
│   │   └── quickstart.md
│   └── advanced/
│       └── customization.md
└── index.md              # Optional custom homepage
```

### 4. Build

```bash
python3 grimoire.py
```

![Grimoire - Terminal Output](screenshots/terminal.png)

### 5. Preview

```bash
cd output && python3 -m http.server 8000
# Visit http://localhost:8000
```

## Project Structure

```
grimoire/
├── grimoire.py             # Generator script
├── config.json             # Site configuration
├── templates/
│   ├── default/            # Purple/indigo theme
│   │   ├── template.html
│   │   ├── css/style.css
│   │   ├── js/app.js
│   │   └── img/
│   └── hackwiki/           # Cyan cybersecurity theme
│       ├── template.html
│       ├── css/style.css
│       ├── js/app.js
│       ├── js/prism-custom.js  # Security tools highlighting
│       └── img/
├── input/
│   ├── notes/              # Your markdown content
│   └── pages/              # Static pages (about, etc.)
└── output/                 # Generated site (gitignored)
```

## Folder Naming

Number prefixes control sort order. By default, they're stripped and names are formatted:

| Folder Name | Displays As |
|-------------|-------------|
| `01-introduction` | Introduction |
| `02. Guides` | Guides |
| `03_reference` | Reference |
| `setup-guide` | Setup Guide |

To keep names exactly as-is (no formatting), set in `config.json`:

```json
{
  "ui": {
    "strip_number_prefix": false
  }
}
```

With `strip_number_prefix: false`, names are displayed unchanged:
| Folder Name | Displays As |
|-------------|-------------|
| `01-introduction` | 01-introduction |
| `02. Guides` | 02. Guides |
| `My Custom Name` | My Custom Name |

## YAML Frontmatter

Optional metadata at the top of any `.md` file:

```markdown
---
display_name: Custom Page Title
last_update: 2025-01-30
---

# Your Content Here
```

## Configuration

### Site Settings

| Key | Description |
|-----|-------------|
| `site.name` | Site title in header |
| `site.description` | Tagline under title |
| `site.url` | Base URL for links/sitemap |
| `site.github_url` | GitHub link in header |

### Paths

| Key | Description |
|-----|-------------|
| `paths.content_folder` | Markdown source directory |
| `paths.pages_folder` | Static pages directory |
| `paths.output_folder` | Generated site output |
| `paths.exclude_folders` | Folders to skip (default: `.trash`, `.obsidian`, `.git`, etc.) |

### Category Icons

Assign FontAwesome icons to top-level folders:

```json
{
  "ui": {
    "category_icons": {
      "01-guides": "fas fa-book",
      "02-api": "fas fa-code",
      "03-tutorials": "fas fa-graduation-cap"
    },
    "default_icon": "fas fa-folder"
  }
}
```

### Sidebar Features

Enable or disable sidebar sections:

```json
{
  "ui": {
    "show_recent": true,
    "show_bookmarks": true,
    "strip_number_prefix": true
  }
}
```

| Key | Default | Description |
|-----|---------|-------------|
| `ui.show_recent` | `true` | Show "Recent" section in sidebar |
| `ui.show_bookmarks` | `true` | Show "Bookmarks" section in sidebar |
| `ui.strip_number_prefix` | `true` | Format display names (strip prefixes, capitalize). Set to `false` to keep names as-is |

### Formatting

Control how folder and file names are displayed in navigation:

```json
{
  "formatting": {
    "acronyms": ["api", "html", "css", "sql", "http", "json", "cli"],
    "display_name_overrides": {
      "tcp-ip": "TCP/IP",
      "faq": "FAQ"
    }
  }
}
```

| Key | Default | Description |
|-----|---------|-------------|
| `formatting.acronyms` | `[...]` | Words to uppercase in display names (e.g. `api` → `API`) |
| `formatting.display_name_overrides` | `{}` | Exact name → display name mappings |

### Contribute Button

Control the contribute button in header and footer:

```json
{
  "ui": {
    "show_contribute": true,
    "contribute_text": "Contribute",
    "contribute_url": "./contribute.html"
  }
}
```

| Key | Default | Description |
|-----|---------|-------------|
| `ui.show_contribute` | `true` | Show contribute button |
| `ui.contribute_text` | `"Contribute"` | Button text |
| `ui.contribute_url` | `"./contribute.html"` | Link URL |

### Footer Settings

Customize the footer display:

```json
{
  "footer": {
    "show_copyright": true,
    "show_timestamp": true,
    "show_powered_by": true,
    "copyright_text": ""
  }
}
```

| Key | Default | Description |
|-----|---------|-------------|
| `footer.show_copyright` | `true` | Show copyright notice |
| `footer.show_timestamp` | `true` | Show generation timestamp |
| `footer.show_powered_by` | `true` | Show "Powered by Grimoire" |
| `footer.copyright_text` | `""` | Custom copyright (use `{year}` and `{site_name}` placeholders) |

## CSS Customization

All theme variables are at the top of `templates/default/css/style.css` (or `templates/hackwiki/css/style.css`) in the **🎨 THEME CUSTOMIZATION** section:

```css
:root {
    /* Accent color - change to match your brand */
    --accent-primary: #6366f1;
    
    /* Content styling */
    --content-h1-size: 2.25rem;
    --content-h2-size: 1.5rem;
    --content-text-size: 1rem;
    --content-line-height: 1.7;
    --content-code-size: 0.875em;
    
    /* Navigation */
    --nav-category-size: 0.9rem;
    --nav-subcategory-size: 0.85rem;
    --nav-item-size: 0.8rem;
    
    /* Layout */
    --sidebar-width: 320px;
}
```

### Key Sections in style.css

| Section | Line | Description |
|---------|------|-------------|
| 🎨 Theme Customization | 1-70 | Main variables (edit these) |
| Light Theme Colors | ~73 | Light mode overrides |
| Article Content | ~835 | Markdown rendering styles |
| Prism.js Overrides | ~1665 | Syntax highlighting colors |

## Command Line

```bash
python3 grimoire.py                            # Use config.json defaults
python3 grimoire.py --template hackwiki        # Use HackWiki theme
python3 grimoire.py --template default         # Use default theme
python3 grimoire.py --input ./docs             # Override content path
python3 grimoire.py --output ./dist            # Override output path
python3 grimoire.py --config other.json        # Use different config
python3 grimoire.py --template /path/to/theme  # Custom template path
```

## Available Templates

| Template | Description |
|----------|-------------|
| `default` | Purple/indigo theme - clean, modern |
| `hackwiki` | Cyan theme - optimized for cybersecurity docs |

## Deployment

The `output/` folder is fully static. Deploy to:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## Customization

### Themes

Edit CSS variables in `templates/default/css/style.css`:

```css
:root {
    --primary-bg: #0f0f1a;
    --accent-primary: #6366f1;
}

[data-theme="light"] {
    --primary-bg: #ffffff;
    --accent-primary: #4f46e5;
}
```

### Syntax Highlighting

Prism.js is included with autoloader. Supports all common languages automatically.

## License

MIT
