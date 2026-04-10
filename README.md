# SkillSwap

Aplikacija za razmjenu vještina — spaja ljude koji žele učiti i podučavati, besplatno i lokalno.

## Tech stack

- **Frontend:** React + TypeScript + Vite
- **UI:** Tailwind CSS + shadcn/ui
- **Backend:** Supabase (auth, baza podataka, storage)
- **Mobile:** Capacitor (Android)

## Razvoj

```bash
npm install
npm run dev
```

## Android (Capacitor)

Capacitor i Android platforma su konfigurirani.

Korisne lokalne naredbe:

- `npm run android:sync` — builda web app i sinkronizira Capacitor Android projekt
- `npm run android:open` — otvara Android Studio projekt

## Automatski AAB na Git tagu

Workflow: `.github/workflows/android-apk-on-tag.yml`

Kada pushaš novi tag, GitHub Actions će:

1. Buildati web app
2. Sinkronizirati Capacitor Android projekt
3. Buildati potpisani AAB (`app-release.aab`)
4. Kreirati/ažurirati GitHub Release i priložiti AAB

Primjer:

```bash
git tag v0.1.0
git push origin v0.1.0
```

Preuzmi AAB iz odgovarajućeg GitHub Releasea.

## Okolišne varijable

Kreiraj `.env` datoteku u root projekta:

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Za produkcijski build koriste se GitHub Secrets.
