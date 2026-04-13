# Dcoders Software Solutions — Website

Modern glassmorphism React website for Dcoders Software Solutions.

## Tech Stack

- React 18
- React Router v6
- CSS Modules
- Google Fonts (Sora)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
# → Opens at http://localhost:3000

# 3. Build for production
npm run build
```

## Pages

| Route        | Page      |
|-------------|-----------|
| `/`          | Home      |
| `/services`  | Services  |
| `/portfolio` | Portfolio |
| `/about`     | About     |
| `/contact`   | Contact   |

## Deployment

### Vercel (Recommended — fastest)

```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at https://vercel.com/new

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```
Or drag the `build/` folder to https://app.netlify.com/drop

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

## Customisation

| File                    | What to edit                        |
|------------------------|-------------------------------------|
| `src/tokens.js`         | Colors, services, projects, team    |
| `src/pages/Contact.js`  | Wire form to EmailJS / Formspree    |
| `public/index.html`     | Meta tags, page title, favicon      |
| `src/components/Logo.js`| Replace SVG with your actual logo   |

## Wiring the Contact Form

Replace the `handleSubmit` simulation in `src/pages/Contact.js` with a real service:

### Option A — EmailJS (free tier)
```bash
npm install emailjs-com
```
```js
import emailjs from 'emailjs-com';
const handleSubmit = async () => {
  await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
  setStatus('success');
};
```

### Option B — Formspree
Change the fetch in `handleSubmit`:
```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```
