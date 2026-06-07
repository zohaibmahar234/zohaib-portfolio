# Zohaib Mahar — Portfolio

React + Node.js portfolio website converted from original HTML design.

## Setup

```bash
# Install all dependencies
npm run install:all

# Start dev server (frontend + backend)
npm run dev
```

- Frontend runs on: http://localhost:5173
- Backend runs on: http://localhost:3001

## Build for Production

```bash
npm run build
```

## Project Structure

```
zohaib-portfolio/
├── server/
│   └── index.js          # Node.js + Express backend (contact form API)
├── client/
│   ├── public/
│   │   └── zohaib.jpg    # Your profile photo
│   ├── src/
│   │   ├── sections/     # Hero, About, Skills, Projects, Experience, Education, Contact
│   │   ├── components/   # Navbar, Footer, LoadingScreen, ScrollToTop, ZMLogo
│   │   ├── hooks/        # useScrollReveal
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   └── vite.config.js
└── package.json
```

## To Add Your CV

Place your CV PDF as `client/public/zohaib_cv.pdf`

## Contact Form

The contact form posts to `/api/contact` on the Node.js server.
To enable real email sending, configure nodemailer in `server/index.js`.

## Deploy

- **Frontend**: Deploy `client/dist` to Vercel
- **Backend**: Deploy `server/` to Railway or Render
