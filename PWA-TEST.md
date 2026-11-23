# Offline Support and PWA

- `manifest.json` provides install metadata.
- `sw.js` caches the app shell for offline use.
- Saved game progress is stored locally in `localStorage`.
- The app does not transmit game data to a server.

## Hosting requirement
The service worker is only active on HTTPS or localhost. Test offline mode through a local static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`, allow the app to cache, disconnect from the network, and reload.
