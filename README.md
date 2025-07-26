# Portfolio Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## CI/CD Setup with GitHub Actions

This project is configured with automated CI/CD using GitHub Actions. When you push changes to the `main` branch, the workflow will:

1. ✅ Checkout the code
2. ✅ Setup Node.js environment
3. ✅ Install dependencies
4. ✅ Run linting checks
5. ✅ Perform TypeScript type checking
6. ✅ Build the project
7. ✅ Deploy to Vercel (production)

### Setup Instructions

#### 1. Connect to Vercel

First, connect your GitHub repository to Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure your project settings
5. Deploy once manually to get the project ID

#### 2. Get Vercel Credentials

You'll need to add these secrets to your GitHub repository:

1. **VERCEL_TOKEN**: 
   - Go to [Vercel Account Settings](https://vercel.com/account/tokens)
   - Create a new token
   - Copy the token value

2. **VERCEL_ORG_ID**:
   - Run `vercel whoami` in your terminal (if you have Vercel CLI installed)
   - Or find it in your Vercel dashboard under Settings > General

3. **VERCEL_PROJECT_ID**:
   - After your first deployment, find it in your Vercel dashboard
   - Or run `vercel project ls` if you have Vercel CLI

#### 3. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following repository secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID` 
   - `VERCEL_PROJECT_ID`

#### 4. Push to Main Branch

Once the secrets are configured, any push to the `main` branch will automatically trigger the deployment pipeline.

### Workflow Details

The CI/CD pipeline includes:

- **Linting**: Ensures code quality with ESLint
- **Type Checking**: Validates TypeScript types
- **Build Testing**: Ensures the project builds successfully
- **Automatic Deployment**: Deploys to Vercel production environment

### Manual Deployment

For manual deployments, you can also use:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
