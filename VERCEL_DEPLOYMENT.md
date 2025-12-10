# Deploying to Vercel

## Prerequisites
- Node.js installed locally
- Git repository initialized
- GitHub account (to connect your repo to Vercel)

## Step-by-Step Deployment Guide

### 1. **Prepare Your Repository**
```bash
# Initialize Git if not already done
git init

# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: Project-based learning platform"
```

### 2. **Push to GitHub**
- Create a new repository on [GitHub](https://github.com/new)
- Follow GitHub's instructions to push your local code:
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### 3. **Deploy to Vercel**

#### Option A: Using Vercel Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your GitHub repository
5. Vercel will auto-detect it's a Node.js project
6. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy your project
vercel

# For production deployment
vercel --prod
```

### 4. **Configure Environment Variables (If Needed)**
1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Environment Variables"
3. Add any required environment variables (like NODE_ENV, API keys, etc.)
4. Redeploy if you added new variables

### 5. **Custom Domain (Optional)**
1. In Vercel Dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

## Configuration Files Included

- **vercel.json**: Vercel configuration file that specifies:
  - Build command and output
  - Routing rules
  - Environment variables

- **.gitignore**: Excludes unnecessary files from Git

## Important Notes

✅ **What's Already Set Up:**
- Express.js server is now serverless-compatible
- Static files (public folder) are automatically served
- EJS templates work correctly in Vercel's environment
- Error handling is configured

⚠️ **Vercel Limitations:**
- Request timeout: 30 seconds (pro plans get more)
- Execution environment: Node.js runs in a serverless container
- Static files must be in the `public` folder (already done)

## Troubleshooting

**Build Fails:**
- Check that `package.json` has all required dependencies
- Ensure `vercel.json` is in the root directory
- Check the Vercel build logs for specific errors

**Routes Not Working:**
- All routes must be relative to the root (e.g., `/projects`, `/resources`)
- Make sure your route files are correctly required in `server.js`

**Slow Performance:**
- Vercel's cold starts can take 3-5 seconds for first request
- Pro plan has faster cold starts
- Consider upgrading if experiencing issues

## Local Testing Before Deployment

```bash
# Install dependencies
npm install

# Run locally to test
npm start

# Visit http://localhost:3000 in your browser
```

## After Deployment

Once deployed, your site will be available at:
- `https://your-project-name.vercel.app` (default)
- Your custom domain (if configured)

You can redeploy anytime by:
- Pushing changes to your main branch on GitHub, OR
- Running `vercel --prod` from your terminal

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Node.js on Vercel](https://vercel.com/docs/runtimes/nodejs)
- [Vercel Support](https://vercel.com/support)
