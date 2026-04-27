# JSMediaSoft Website

Corporate bilingual website (`es`/`en`) built with Next.js + Sanity.

## Stack
- Next.js 16 (App Router + TypeScript)
- Tailwind CSS v4
- Sanity CMS (embedded Studio at `/studio`)

## Local development
1. Copy `.env.example` to `.env.local` and fill Sanity values.
2. Install dependencies:
   - `npm install`
3. Start frontend:
   - `npm run dev`
4. Start Sanity Studio (optional separate terminal):
   - `npm run sanity`

## Available routes
- `/es` and `/en` (localized site)
- `/es/services`, `/es/projects`, `/es/about`, `/es/contact`
- `/studio` (Sanity Studio)

## Deployment target
Deployment checklist is documented in:
- `docs/bluehost-deploy-checklist.md`
