# Welcome to your Lovable project

## Android (Capacitor)

Capacitor and Android platform are configured.

Useful local commands:

- `npm run android:sync` - builds web app and syncs Capacitor Android project
- `npm run android:open` - opens Android Studio project

## Automatic APK on Git Tag

Workflow: `.github/workflows/android-apk-on-tag.yml`

When you push a new tag, GitHub Actions will:

1. Build the web app
2. Sync Capacitor Android project
3. Build debug APK (`app-debug.apk`)
4. Create/update release for that tag and attach APK

Example:

```bash
git tag v0.1.0
git push origin v0.1.0
```

Then download APK from the corresponding GitHub Release.
