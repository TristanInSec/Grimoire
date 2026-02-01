---
display_name: Config Reference
last_update: 2025-01-31
---

# Configuration Reference

Complete reference for `config.json` options.

## Site Section

```json
{
  "site": {
    "name": "string",
    "url": "string",
    "description": "string",
    "github_url": "string"
  }
}
```

| Option | Type | Description |
|--------|------|-------------|
| `name` | string | Site title displayed in header |
| `url` | string | Base URL for canonical links |
| `description` | string | Tagline under site name |
| `github_url` | string | Link to GitHub repository |

## Paths Section

```json
{
  "paths": {
    "content_folder": "input/notes",
    "pages_folder": "input/pages",
    "output_folder": "output",
    "template_folder": "templates/default",
    "exclude_folders": [".trash", ".obsidian", ".git"]
  }
}
```

| Option | Default | Description |
|--------|---------|-------------|
| `content_folder` | `input/notes` | Directory containing Markdown content |
| `pages_folder` | `input/pages` | Directory for static pages (About, Contribute) |
| `output_folder` | `output` | Where generated HTML is placed |
| `template_folder` | `templates/default` | Template directory (default, hackwiki, or custom path) |
| `exclude_folders` | `[".trash", ".obsidian", ".git", "__pycache__", "node_modules"]` | Folders to skip during processing |

**Built-in templates:**
- `templates/default` - Purple/indigo theme
- `templates/hackwiki` - Cyan cybersecurity theme

## SEO Section

```json
{
  "seo": {
    "index_description": "string",
    "page_description_template": "string",
    "keywords": "string"
  }
}
```

| Option | Type | Description |
|--------|------|-------------|
| `index_description` | string | Meta description for homepage |
| `page_description_template` | string | Template for page descriptions |
| `keywords` | string | Meta keywords for all pages |

Template variables: `{title}`, `{category}`, `{site_name}`

## Generator Section

```json
{
  "generator": {
    "generate_sitemap": true
  }
}
```

## UI Section

```json
{
  "ui": {
    "show_recent": true,
    "show_bookmarks": true,
    "show_contribute": true,
    "contribute_text": "Contribute",
    "contribute_url": "./contribute.html",
    "strip_number_prefix": true,
    "category_icons": {
      "category-name": "fas fa-icon"
    },
    "default_icon": "fas fa-folder"
  }
}
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `show_recent` | boolean | `true` | Show "Recent" section in sidebar |
| `show_bookmarks` | boolean | `true` | Show "Bookmarks" section in sidebar |
| `show_contribute` | boolean | `true` | Show "Contribute" button in header and footer |
| `contribute_text` | string | `"Contribute"` | Custom text for the contribute button |
| `contribute_url` | string | `"./contribute.html"` | URL for contribute link |
| `strip_number_prefix` | boolean | `true` | Format names (strip prefixes, capitalize). Set `false` to keep names unchanged |
| `category_icons` | object | `{}` | Map category names to FontAwesome icons |
| `default_icon` | string | `fas fa-folder` | Fallback icon for unmapped categories |

## Formatting Section

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

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `acronyms` | array | `[]` | Words to uppercase in display names (e.g. `api` → `API`) |
| `display_name_overrides` | object | `{}` | Exact folder/file name → display name mappings |

## Footer Section

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

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `show_copyright` | boolean | `true` | Show copyright notice |
| `show_timestamp` | boolean | `true` | Show generation timestamp |
| `show_powered_by` | boolean | `true` | Show "Made with Grimoire" credit |
| `copyright_text` | string | `""` | Custom copyright text (use `{year}` and `{site_name}` placeholders) |

Example custom copyright:

```json
{
  "footer": {
    "copyright_text": "Copyright {year} My Company. All rights reserved."
  }
}
```
