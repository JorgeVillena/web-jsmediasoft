# JSMediaSoft Website

Corporate bilingual website (`en`/`es`) built with Next.js + Sanity, exported as a static site and hosted on Bluehost.

## Stack

- Next.js 16 (App Router, TypeScript, **static export**)
- Tailwind CSS v4
- Sanity CMS (Studio hosted at `https://jsmediasoft.sanity.studio`)
- GitHub Actions for CI/CD
- Bluehost (Apache, shared) as the static host

## Architecture

```
Editor -> Sanity Studio -> Sanity Lake -> webhook -> GitHub Actions -> SFTP -> Bluehost public_html
```

Every published change in Sanity triggers a rebuild and SFTP upload. No server-side rendering.

## Local development

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and fill Sanity values (already configured locally with the production project).
3. Run the frontend: `npm run dev` (http://localhost:3000)
4. (optional) Run the Studio in standalone mode: `npm run sanity` (http://localhost:3333)

## Production build (static export)

```bash
npm run build       # generates ./out/
npx serve out       # smoke-test the static output locally
```

## Available routes

- `/` -> redirects to `/en/`
- `/en/`, `/en/services/`, `/en/projects/`, `/en/about/`, `/en/contact/`
- `/es/`, `/es/services/`, `/es/projects/`, `/es/about/`, `/es/contact/`
- `/sitemap.xml`, `/robots.txt`

## Sanity content

- Project ID: `zctnqm2f`
- Dataset: `production`
- Document types: `siteSettings`, `service`, `project`
- Studio: `https://jsmediasoft.sanity.studio`

To deploy schema/UI changes to the hosted Studio:

```bash
npx sanity login
npm run sanity:deploy
```

## Deployment

Full step-by-step guide (FTP credentials, GitHub Secrets, Sanity webhook, SSL):

- [docs/bluehost-deploy-checklist.md](docs/bluehost-deploy-checklist.md)

## Day-2 editing flow

1. Open `https://jsmediasoft.sanity.studio`
2. Edit a document (e.g. add a project) and click **Publish**
3. Sanity webhook -> GitHub Actions builds and uploads the static site
4. ~2 minutes later the change is live on `https://jsmediasoft.com`
