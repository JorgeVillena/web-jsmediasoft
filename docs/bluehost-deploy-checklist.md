# Bluehost + Sanity deployment guide

This site is a **static Next.js export** (`out/`) hosted on **Bluehost Choice Plus**, with content edited in **Sanity Studio** (sanity.io). Publishing flow:

```
Editor -> Sanity Studio -> Sanity Lake -> webhook -> GitHub Actions -> SFTP -> Bluehost public_html -> https://jsmediasoft.com
```

---

## 1) One-time setup

### 1.1 Sanity

- Project ID: `zctnqm2f`
- Dataset: `production`
- Studio: `https://jsmediasoft.sanity.studio` (deployed once with the CLI)

Deploy the Studio (only the first time, or when `sanity/schemaTypes/*` change):

```bash
npx sanity login        # opens browser, authenticate as villenajm0804@gmail.com
npm run sanity:deploy   # asks once for hostname -> "jsmediasoft"
```

Local Studio for development:

```bash
npm run sanity   # opens http://localhost:3333
```

### 1.2 Bluehost FTP user

In Bluehost cPanel:

1. **cPanel -> FTP Accounts**
2. Create a dedicated FTP user, e.g. `deploy@jsmediasoft.com`
3. Set the **Directory** to `/public_html` (so the user is jailed there)
4. Generate a strong password and **save it**
5. Note the **FTP host** (e.g. `ftp.jsmediasoft.com` or the server-specific host shown in cPanel) and **port** (`21` for FTPS)
6. Confirm FTPS / explicit TLS is enabled (Bluehost has it on by default)

> The domain `jsmediasoft.com` is served from the Bluehost addon-domain folder
> `public_html/website_bac71128/`. Since the FTP user is jailed in `/public_html/`,
> the GitHub Action must upload to **`/website_bac71128/`** (the path is relative
> to the FTP user's home, not absolute on disk).

### 1.3 GitHub repository

The repo lives at `https://github.com/JorgeVillena/web-jsmediasoft`.

Set the following **Secrets** in `Settings -> Secrets and variables -> Actions -> New repository secret`:

| Secret | Value |
|---|---|
| `BLUEHOST_FTP_SERVER` | hostname from Bluehost FTP (no protocol, no port) |
| `BLUEHOST_FTP_USERNAME` | the FTP user created above |
| `BLUEHOST_FTP_PASSWORD` | the password for that user |
| `BLUEHOST_FTP_DIR` | `/website_bac71128/` (relative to FTP user's home `/public_html/`; trailing slash matters) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `zctnqm2f` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |

> Don't put quotes around the values. GitHub stores them verbatim.

### 1.4 Sanity -> GitHub webhook

This webhook triggers the GitHub Action whenever you publish content in Sanity.

1. Create a **GitHub Personal Access Token (classic)** with scope `repo`:
   - https://github.com/settings/tokens
   - Save the token (you'll only see it once)
2. In Sanity Manage:
   - Go to https://www.sanity.io/manage/project/zctnqm2f/api/webhooks
   - Click **Create webhook**
   - Configure:
     - **Name**: `GitHub deploy`
     - **URL**: `https://api.github.com/repos/JorgeVillena/web-jsmediasoft/dispatches`
     - **Dataset**: `production`
     - **Trigger on**: `Create`, `Update`, `Delete`
     - **Filter** (optional): `_type in ["siteSettings", "service", "project"]`
     - **HTTP method**: `POST`
     - **API version**: `v2021-03-25`
     - **Headers**:
       - `Authorization: token <YOUR_GITHUB_PAT>`
       - `Accept: application/vnd.github.v3+json`
       - `Content-Type: application/json`
     - **Body** (JSON):
       ```json
       {
         "event_type": "sanity-update",
         "client_payload": {
           "documentId": "_id",
           "documentType": "_type"
         }
       }
       ```
3. Save and click **Send test** to confirm it returns `204 No Content`.

### 1.5 SSL on Bluehost

1. **cPanel -> SSL/TLS Status**
2. Run **AutoSSL** for `jsmediasoft.com` and `www.jsmediasoft.com`
3. Wait until the badge turns green (usually < 5 min)
4. The `.htaccess` already forces HTTPS and redirects `www -> apex`

---

## 2) Trigger the first deploy

```bash
git add -A
git commit -m "Initial production build"
git branch -M main
git push -u origin main
```

GitHub Actions will run automatically:
- Install deps
- Build static export with Sanity content
- Upload `out/*` to `/public_html/` via SFTP

You can also trigger manually from `Actions -> Deploy to Bluehost -> Run workflow`.

---

## 3) Day-2 editing flow

```bash
# Editor opens https://jsmediasoft.sanity.studio
# Edits a document and clicks Publish
# Sanity webhook fires -> GitHub Action runs (~2 min)
# Site updates at https://jsmediasoft.com
```

No code, no SSH, no FTP needed for content edits.

---

## 4) Validation checklist

After the first deploy:

- [ ] `https://jsmediasoft.com/` redirects to `https://jsmediasoft.com/en/`
- [ ] `https://www.jsmediasoft.com/` redirects to apex `https://jsmediasoft.com/`
- [ ] HTTP automatically upgrades to HTTPS
- [ ] `https://jsmediasoft.com/en/` renders the home in English
- [ ] `https://jsmediasoft.com/es/` renders the home in Spanish
- [ ] `/en/services/`, `/en/projects/`, `/en/about/`, `/en/contact/` and the `/es/` equivalents return 200
- [ ] `https://jsmediasoft.com/sitemap.xml` lists all locale routes
- [ ] `https://jsmediasoft.com/robots.txt` allows crawling
- [ ] Lighthouse mobile score > 90 on home and services
- [ ] Submit sitemap in Google Search Console

---

## 5) Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Action fails at FTP step | Bad credentials or directory | Re-test with FileZilla using the same secrets |
| Site loads but `/` doesn't redirect | `.htaccess` not uploaded | Verify `out/.htaccess` was generated and uploaded; check Bluehost has `mod_rewrite` enabled (default on shared) |
| Sanity edits not appearing | Webhook not firing or filter too strict | Check `Sanity Manage -> API -> Webhooks -> Last attempts` and the **Actions** tab on GitHub |
| `404` on subroutes after refresh | Pretty-URL rewrite missing | The `.htaccess` already handles this — re-upload it if missing |
| Mixed-content warning | Hard-coded `http://` somewhere | Search the repo for `http://` and ensure all assets use `https://` |

---

## 6) Quick reference

- Production: `https://jsmediasoft.com`
- Studio: `https://jsmediasoft.sanity.studio`
- Repo: `https://github.com/JorgeVillena/web-jsmediasoft`
- Sanity Manage: `https://www.sanity.io/manage/project/zctnqm2f`
- Bluehost cPanel: usually at `https://my.bluehost.com`
