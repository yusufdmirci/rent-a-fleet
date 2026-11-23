const STORAGE_KEY = 'rent-a-car-simulasyon-save-v1';

function loadSave() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (_) {}
  return null;
}

function saveGame(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
}

window.RentSave = { loadSave, saveGame };
