# Ostkai Physio — a bilingual practice website built with Hugo

> **Ostkai Physio is a fictional physiotherapy practice.** The city of
> Hallerbach, the therapists, the courses and the photos are all made up.
> The site, its content and its images were generated with AI, and it is
> maintained with [Ikasu](https://ikasu.io), an AI content copilot for
> static sites. Use it as a starting point for your own practice, studio
> or clinic.

A one-page website in German and English for a small health practice:
services, what happens at the first appointment, the team, upcoming
courses, prices, opening hours with today highlighted and a contact
band with directions — plus the imprint and privacy pages a German site needs.

- [Hugo](https://gohugo.io) only: no Node, no `package.json`, no install step
- German at `/`, English at `/en/`, with `hreflang` links and a language switch
- Photos resized and converted to WebP by Hugo at build time
- No cookies, no external fonts, maps or scripts; works without JavaScript
- Search-engine data for the practice (schema.org), sitemap and `robots.txt`

## Getting started

Needs [Hugo](https://gohugo.io/installation/) 0.163 or newer (the
standard edition is enough).

```sh
hugo server       # http://localhost:1313
hugo --minify     # static site in public/
```

## Where to change what

Nearly every change is one plain-text file. Texts that exist in both
languages sit side by side as `de:` and `en:`.

| To change … | Edit |
|---|---|
| Name, address, email, opening hours | `data/practice.yaml` |
| The notice bar (holidays, closures) | `notice:` in `data/practice.yaml` — it disappears after its `until` date |
| Services | `data/services.yaml` |
| Team | `data/team.yaml` |
| Courses | `data/courses.yaml` — only courses that haven't started yet are shown |
| Prices | `data/prices.yaml` |
| Section headings and texts | `content/_index.de.md`, `content/_index.en.md` |
| Imprint, privacy | `content/impressum.*.md`, `content/datenschutz.*.md` |
| Labels like "per session" | `i18n/de.yaml`, `i18n/en.yaml` |
| Colours, fonts, spacing | `assets/css/main.css` (tokens at the top) |
| Photos | drop a file into `assets/images/`, add its alt texts to `data/images.yaml` |

If an entry is missing a field or one of the two languages, the build
stops and names the file and the field.

Courses and the notice bar are decided when the site is built. Rebuild
it now and then (or let Ikasu do it with every edit) so past courses drop
off.

## Deploying

`hugo --minify` writes a static site to `public/`. Any static host works:
Netlify, Cloudflare Pages, GitHub Pages, your own server. Set `baseURL`
in `hugo.toml` to your domain.

## Using this for a real site

The images look real but were generated with AI, and the
notice in the footer is what labels them. If you publish a real site with
them and remove that notice, you may have to label them yourself, for
example under Article 50 of the EU AI Act. Replacing them with your own
avoids the question.

## Licence

MIT, see [LICENSE](LICENSE). Images: see [IMAGES.md](IMAGES.md).
