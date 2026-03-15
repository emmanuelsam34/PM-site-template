## Cursor Cloud specific instructions

This is a React + TypeScript SPA (Apex Construct & Consultancy marketing site) built with Vite. No backend, database, or external API is required.

### Key commands

See `package.json` scripts:
- **Dev server:** `npm run dev` (Vite on port 3000, host 0.0.0.0)
- **Lint:** `npm run lint` (runs `tsc --noEmit`)
- **Build:** `npm run build` (production build to `dist/`)

### Notes

- `express`, `better-sqlite3`, and `@google/genai` are listed in `package.json` but are **not used** anywhere in the source code. They are leftover template dependencies from Google AI Studio and can be ignored.
- `GEMINI_API_KEY` is referenced in `vite.config.ts` but is not consumed by any app code. The app runs fine without it.
- There is no test framework configured; `npm run lint` (TypeScript type-checking) is the primary automated check.
