# Musharraf Rehman – MERN Portfolio

A black and white animated developer portfolio.
**Frontend:** React + Vite. **Backend:** Node.js + Express + MongoDB (saves contact form messages).

## Folder structure

```
portfolio/
├── client/                     React frontend (Vite)
│   ├── public/photo.svg        Your photo goes here (replace it)
│   ├── src/
│   │   ├── components/         Header, Hero, Marquee, About, Services, Work, Skills, Contact, Footer
│   │   ├── data/portfolio.js   ALL your content (name, links, projects, skills)
│   │   ├── hooks/useTheme.js   Dark/light toggle (saved in localStorage)
│   │   ├── styles/global.css   All styles and colors (CSS variables)
│   │   ├── App.jsx             Page layout + smooth scrolling
│   │   └── main.jsx            App entry point
│   ├── index.html              Page title, fonts, meta tags
│   └── .env.example            Frontend environment variables
└── server/                     Express backend
    ├── models/Message.js       Mongoose schema for contact messages
    ├── routes/contact.js       POST /api/contact, GET /api/contact (admin)
    ├── server.js               App setup, CORS, rate limit, DB connection
    └── .env.example            Backend environment variables
```

## Requirements

- Node.js 18 or newer (https://nodejs.org)
- A MongoDB database: free MongoDB Atlas cluster (https://www.mongodb.com/atlas) or local MongoDB

## Libraries used

### Client (`client/package.json`)

| Library | Why it is used |
|---|---|
| `react`, `react-dom` | UI components |
| `vite` | Fast dev server and build tool |
| `@vitejs/plugin-react` | Lets Vite compile React (JSX) |
| `framer-motion` | Hero text reveal and fade-in animations |
| `lenis` | Smooth scrolling |

### Server (`server/package.json`)

| Library | Why it is used |
|---|---|
| `express` | Web server and API routes |
| `mongoose` | MongoDB models and validation |
| `cors` | Allows only your frontend to call the API |
| `dotenv` | Loads secrets from the `.env` file |
| `express-rate-limit` | Stops spam on the contact form |
| `nodemon` (dev) | Restarts the server when you edit code |

## Setup

### 1. Backend
```bash
cd server
npm install
cp .env.example .env        # Windows: copy .env.example .env
```
Open `server/.env` and set `MONGO_URI` (your Atlas string) and a long random `ADMIN_KEY`. Then:
```bash
npm run dev                 # runs on http://localhost:5000
```

### 2. Frontend (new terminal)
```bash
cd client
npm install
cp .env.example .env        # Windows: copy .env.example .env
npm run dev                 # opens on http://localhost:5173
```

The contact form now saves messages to MongoDB. To read them:
```bash
curl http://localhost:5000/api/contact -H "x-admin-key: YOUR_ADMIN_KEY"
```
You can also view them in the Atlas dashboard under the `messages` collection.

## Customize

- **Text, links, projects, skills:** edit `client/src/data/portfolio.js`.
- **Photo:** copy your image into `client/public/` (e.g. `photo.jpg`) and set `photo: "/photo.jpg"` in `portfolio.js`. It is shown in black and white automatically.
- **Colors:** change the variables at the top of `client/src/styles/global.css`.
- **Animation speed:** edit the `delay` and `duration` values in `components/Hero.jsx`.
- **Page title and fonts:** `client/index.html`.

## Deploy

1. **Database:** MongoDB Atlas (free tier). Allow network access from anywhere (`0.0.0.0/0`) or your host's IPs.
2. **Backend:** deploy the `server/` folder to Render or Railway.
   - Build command: `npm install`, start command: `npm start`
   - Environment variables: `MONGO_URI`, `CLIENT_URL` (your frontend URL), `ADMIN_KEY`
3. **Frontend:** deploy the `client/` folder to Vercel or Netlify.
   - Build command: `npm run build`, output directory: `dist`
   - Environment variable: `VITE_API_URL` = your backend URL (no trailing slash)
4. Push to GitHub first (`git init`, commit, push). `.gitignore` already excludes `node_modules` and `.env`, so never commit your `.env` files.

Free plans, limits and settings change, so check each host's current docs.

## Troubleshooting

- **"Could not send" on the form:** the backend is not running, `VITE_API_URL` is wrong, or `CLIENT_URL` in `server/.env` does not match your frontend URL exactly.
- **MongoDB connection failed:** check `MONGO_URI`, your Atlas password (special characters must be URL-encoded) and Atlas network access.
- **Port already in use:** change `PORT` in `server/.env` and update `VITE_API_URL`.
