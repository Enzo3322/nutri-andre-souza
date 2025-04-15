# André Souza - Consultoria Nutricional

Website for nutritionist services using Next.js, Tailwind CSS, and shadcn/ui.

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### GitHub Pages Setup

To deploy this site to GitHub Pages:

1. Go to your GitHub repository settings
2. Navigate to "Pages"
3. Set "Source" to "GitHub Actions"
4. Ensure your repository is public, or that you have GitHub Pro for private repository Pages support

### How Deployment Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. Run automatically when you push to the `main` branch
2. Install dependencies
3. Configure the Next.js app for static export with the correct base path
4. Build the website
5. Deploy it to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:
1. Go to "Actions" in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Customization

To modify the base path for your GitHub Pages site, update the `basePath` in the GitHub Actions workflow file. 