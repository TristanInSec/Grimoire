---
display_name: Configuration
last_update: 2025-01-31
---

# Configuration Guide

Learn how to configure your documentation site with `config.json`.

## Basic Configuration

Create a `config.json` file in your project root:

```json
{
  "site": {
    "name": "My Documentation",
    "description": "Project docs",
    "url": "https://docs.example.com"
  },
  "paths": {
    "content_folder": "input/notes",
    "output_folder": "output"
  }
}
```

## Site Settings

| Setting | Description | Required |
|---------|-------------|----------|
| `site.name` | Your site title | Yes |
| `site.description` | Tagline shown in header | Yes |
| `site.url` | Base URL for sitemap | No |

## Path Settings

Configure where your content lives and where output goes:

- `content_folder` - Directory containing your Markdown files
- `output_folder` - Where generated HTML will be placed
- `pages_folder` - Static pages like About, Contribute

## Folder Organization

Grimoire supports **unlimited folder depth** for organizing your content:

```
input/notes/
├── 01-getting-started/
│   └── installation.md
├── 02-guides/
│   ├── basics/
│   │   └── quickstart.md
│   └── advanced/
│       ├── security/
│       │   ├── authentication/
│       │   │   └── oauth.md      ← 5 levels deep
│       │   └── encryption.md
│       └── performance.md
└── 03-reference/
    └── api.md
```

Folders can be nested as deep as needed. The navigation will automatically create collapsible sections for each level.

## Number Prefixes

By default, names are formatted (number prefixes stripped, capitalized):
- `01-introduction` → Introduction
- `02. Guides` → Guides
- `api-reference` → API Reference

To keep names exactly as-is (no formatting):

```json
{
  "ui": {
    "strip_number_prefix": false
  }
}
```

With this setting, names are displayed unchanged:
- `01-introduction` → 01-introduction
- `02. Guides` → 02. Guides
- `My Custom Name` → My Custom Name

## Icon Configuration

Customize category icons in `ui.category_icons`:

```json
{
  "ui": {
    "category_icons": {
      "getting-started": "fas fa-rocket",
      "guides": "fas fa-book"
    }
  }
}
```

## Sidebar Features

Control which sidebar sections are visible:

```json
{
  "ui": {
    "show_recent": true,
    "show_bookmarks": true
  }
}
```

Set either to `false` to hide that section.

## Footer Options

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

| Option | Description |
|--------|-------------|
| `show_copyright` | Display "© Year Site Name" |
| `show_timestamp` | Display "Generated on Date" |
| `show_powered_by` | Display "Made with Grimoire" |
| `copyright_text` | Custom text (use `{year}` and `{site_name}`) |

See the [Config Reference](../03-reference/config.md) for complete options.
