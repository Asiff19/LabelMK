# Build and Deploy a Modern Next 13 Website With Framer Motion & Tailwind CSS

### [Live Site](https://metaverse-sage-psi.vercel.app/)

![Chat Application](https://i.ibb.co/sbSHWH0/Thumbnail-1.png)

### [🌟 Become a top 1% Next.js 13 developer in only one course](https://jsmastery.pro/next13)
### [🚀 Land your dream programming job in 6 months](https://jsmastery.pro/masterclass)

## Order form setup

The order form submits through Web3Forms and does not open an email application. Create an access key at [Web3Forms](https://web3forms.com/) and set it for local builds in `.env.local`:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
```

For GitHub Pages deployments, add a repository Actions secret named `WEB3FORMS_ACCESS_KEY`. The deploy workflow injects it during the static build.

For Vercel, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to the project's Environment Variables in **Settings**, with the Web3Forms access key and the **Production** environment selected (also select Preview/Development if needed). Redeploy after changing it because the value is embedded during the build. Confirm the latest deployment is from the `main` branch.

## Deploy to Hostinger

This project is exported as a static site, so it can run on Hostinger web hosting without a Node.js server. Buying a domain alone does not include website hosting.

1. In hPanel, add a website to your hosting plan and assign the domain you purchased.
2. From the project folder, install dependencies and build the site:

   ```sh
   npm ci
   npm run build
   ```

   Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` before building if you want the order form enabled.
3. Open the website's File Manager and go to `public_html`. Upload the **contents** of the generated `out` folder there, so `index.html` is directly inside `public_html`. Do not upload the project source, `node_modules`, `.next`, or `.env.local`.
4. If the domain is not connected automatically, use hPanel's domain connection instructions. Update the domain's nameservers or DNS records to the values Hostinger provides, then allow time for DNS propagation.
5. In hPanel, enable the site's SSL certificate and test both the domain and its `www` address over HTTPS.
