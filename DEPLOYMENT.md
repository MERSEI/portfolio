# Deployment

The site deploys to Vercel from `github.com/MERSEI/portfolio`. Pushing to the
default branch triggers an automatic redeploy.

## Custom domain

1. Vercel project dashboard → Settings → Domains → add the domain.
2. Point its DNS at Vercel per the instructions shown there.
3. Update `SITE_URL` in `lib/site.ts` to the new domain — it feeds
   `metadataBase`, `robots.txt` and `sitemap.xml`.

## Updating case studies

Case studies are data, not markup. To add or edit one, edit the `cases` array
in `lib/cases.ts` — each entry needs a `slug`, `stack`, `links`, and bilingual
`ru`/`en` copy (`tagline`, `problem`, `system`, `role`, `outcome`). The
`/work/[slug]` route and the homepage list render from that array
automatically; no page changes needed.

## Troubleshooting

Build fails locally:

```bash
rm -rf .next
npm install
npm run build
```

To roll back a bad deploy: Vercel dashboard → Deployments → pick a previous
version → Promote to Production.
