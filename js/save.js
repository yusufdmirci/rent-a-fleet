const STORAGE_KEY = 'rent-a-car-simulasyon-save-v2';

export function loadSave() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (!value) return null;
    const parsed = JSON.parse(value);
    return parsed && Array.isArray(parsed.vehicles) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveGame(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function clearSave() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}
