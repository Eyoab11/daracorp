## Daracorp Frontend

Daracorp is a React + Vite single‑page application for showcasing and delivering corporate training (compliance, security, risk, whistleblowing, etc.). This package is the public marketing & course discovery site (separate admin + backend apps live in sibling folders).

### Key Features
- Modern React (hooks) + Vite for fast dev & builds
- Re‑usable UI components (navigation, cards, carousel, lazy images)
- Course & training data loading via lightweight API layer (`src/lib`)
- Theming support (light/dark styles)
- Route‑based pages under `src/pages`

### Project Structure (excerpt)
```
src/
	pages/        Top‑level routed pages (Home, Courses, Demo, etc.)
	components/   Layout & shared UI (Navbar, Footer)
	shared/       Reusable visual components (Card, Carousel, Marquee ...)
	data/         Static training/course seed data
	lib/          API helpers & external client setup
```

### Development
Install deps and start the local dev server:
```
npm install
npm run dev
```
Build for production:
```
npm run build
```
Preview the production build:
```
npm run preview
```

### Environment
Add any required environment variables (e.g. for Supabase) in a `.env` file following the examples referenced in `src/lib`.

### Contributing
Keep components small and composable, prefer colocated styles, and avoid introducing large dependencies without discussion.

### License
Internal project – license details TBD.


# Link 

https://daracorp.vercel.app/
 