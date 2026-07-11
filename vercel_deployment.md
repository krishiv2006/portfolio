# Vercel Deployment Walkthrough

This guide details how to host your React + Vite developer portfolio on Vercel. Because the project code is nested within the `portfolio/` subfolder of your repository, you need to configure the deployment settings correctly.

---

## Method 1: Deploying via Vercel Dashboard (Recommended)

This method connects directly to your GitHub repository and automatically deploys every time you push changes to your main branch.

### Step 1: Push Your Code to GitHub
Ensure all your local changes (including the updated Semester 4 score) are committed and pushed to your GitHub repository.
```bash
git add .
git commit -m "Update Semester 4 score and add vercel configuration"
git push origin main
```

### Step 2: Import into Vercel
1. Go to the [Vercel Dashboard](https://vercel.com/dashboard) (log in with your GitHub account).
2. Click **Add New** → **Project**.
3. Under **Import Git Repository**, locate your portfolio repository and click **Import**.

### Step 3: Configure Project Settings (Critical Layer)
Because your React application lives inside the `/portfolio` subfolder, you **must override the Root Directory**:

1. In the **Configure Project** screen, locate the **Root Directory** field.
2. Click **Edit** beside it, select the `portfolio` subdirectory, and click **Continue**.
3. Vercel will automatically detect **Vite** as the framework compiler.
4. Keep the default settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

Vercel will build the project and output a live public URL (e.g., `https://krishiv-portfolio.vercel.app/`).

---

## Method 2: Deploying via Vercel CLI (Command Line)

If you prefer to deploy directly from your local terminal:

### Step 1: Install Vercel CLI
If you don't have the Vercel CLI installed globally, run:
```bash
npm install -g vercel
```

### Step 2: Run the Deployment Command
Change directory into your `portfolio/` subfolder and run `vercel`:
```bash
cd portfolio
vercel
```

### Step 3: Respond to CLI Prompts
Follow these prompt configurations:
- **Set up and deploy?** Yes
- **Which scope?** Your personal Vercel team/account
- **Link to existing project?** No
- **What’s your project’s name?** `krishiv-portfolio`
- **In which directory is your code located?** `./` (since you already ran `cd portfolio` to change directory into it)
- Vercel CLI will auto-detect the Vite build and ask: **Want to modify these settings?** No

Once the deployment completes, the CLI will output a live inspection URL and a production URL.
To deploy to production later after making updates:
```bash
vercel --prod
```
