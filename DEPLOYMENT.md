# Deployment Guide

Your portfolio is built and ready to deploy to Vercel! Here are 2 easy ways to get it live.

## 🚀 Option 1: Deploy via GitHub (Recommended)

This is the easiest method and gives you continuous deployment.

### Step 1: Push to GitHub
```bash
cd portfolio

# If not already a git repo
git init

# Add remote (replace YOUR-USERNAME and repo-name)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com/)
2. Sign in with GitHub
3. Click "New Project"
4. Select your portfolio repository
5. Click "Deploy"
6. Done! Your site will be live at `portfolio-YOUR-USERNAME.vercel.app`

**Benefits:**
- Automatic deployments on every git push
- Easy to update projects
- Free with generous free tier

---

## 🚀 Option 2: Deploy via Vercel CLI (Quick)

```bash
# Make sure you're in the portfolio directory
cd portfolio

# Login to Vercel (first time only)
vercel login

# Deploy
vercel --prod
```

Follow the prompts:
- Scope: Select your account
- Project name: `portfolio` (or your choice)
- Directory: `./` (default)
- Framework: Next.js (auto-detected)

**Your site will be live in seconds!**

---

## 📋 Post-Deployment Checklist

- [ ] Site is live on Vercel
- [ ] Custom domain set up (optional in Vercel dashboard)
- [ ] GitHub repo linked for auto-deployments
- [ ] Share URL with portfolio/resume

## 🌐 Custom Domain (Optional)

Once deployed:
1. Go to Vercel project dashboard
2. Settings → Domains
3. Add your custom domain
4. Follow DNS instructions

## 📝 Update Projects

After deployment, to update project details:

1. Edit `app/page.tsx`
2. Modify the `projects` array
3. Save and push to GitHub
4. Vercel automatically redeploys

## 🔧 Troubleshooting

**Build fails?**
```bash
# Clear cache locally
rm -rf .next
npm install
npm run build
```

**Need to rollback?**
Go to Vercel dashboard → Deployments → Select previous version

## 📞 Support

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
