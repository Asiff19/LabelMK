# Build and Deploy a Modern Next 13 Website With Framer Motion & Tailwind CSS

### [Live Site](https://metaverse-sage-psi.vercel.app/)

![Chat Application](https://i.ibb.co/sbSHWH0/Thumbnail-1.png)

### [🌟 Become a top 1% Next.js 13 developer in only one course](https://jsmastery.pro/next13)
### [🚀 Land your dream programming job in 6 months](https://jsmastery.pro/masterclass)

## Order form setup

The order form appends submissions to a `Form Submissions` tab in the linked Google Sheet using a bound Apps Script web app.

```env
NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT=https://script.google.com/macros/s/your-deployment-id/exec
```

To connect the sheet:

1. Open the sheet, choose **Extensions → Apps Script**, and replace the editor contents with [`scripts/google-sheets/Code.gs`](./scripts/google-sheets/Code.gs). Save the script.
2. Choose **Deploy → New deployment → Web app**. Set **Execute as** to yourself and **Who has access** to **Anyone**, then deploy and authorize it. This makes the script endpoint callable by the public form; do not make the spreadsheet itself public.
3. Copy the web app URL ending in `/exec`. Set it as `NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT` in local `.env.local`, in Vercel's **Settings → Environment Variables** for Production (and Preview if used), and as the GitHub Actions secret `GOOGLE_SHEETS_ENDPOINT`.
4. Redeploy Vercel and push to `main` (or manually run the Pages workflow) after configuring the endpoint. Environment variables are embedded at build time.
5. Submit a test request and verify it appears in the sheet's `Form Submissions` tab. Keep the spreadsheet restricted and share it only with the client and other authorized people; configure Google Sheets notifications if they need email alerts.

The web app URL is public because the browser posts directly to it; the script validates and appends submitted fields and includes a basic honeypot. Google Apps Script responses are cross-origin, so the browser cannot confirm a row was written; check the sheet and Apps Script **Executions** after the test. Do not put Google account credentials in the website or repository.

## Deploy to Hostinger

This project is exported as a static site, so it can run on Hostinger web hosting without a Node.js server. Buying a domain alone does not include website hosting.

1. In hPanel, add a website to your hosting plan and assign the domain you purchased.
2. From the project folder, install dependencies and build the site:

   ```sh
   npm ci
   npm run build
   ```

   Set `NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT` in `.env.local` before building if you want the order form enabled.
3. Open the website's File Manager and go to `public_html`. Upload the **contents** of the generated `out` folder there, so `index.html` is directly inside `public_html`. Do not upload the project source, `node_modules`, `.next`, or `.env.local`.
4. If the domain is not connected automatically, use hPanel's domain connection instructions. Update the domain's nameservers or DNS records to the values Hostinger provides, then allow time for DNS propagation.
5. In hPanel, enable the site's SSL certificate and test both the domain and its `www` address over HTTPS.
