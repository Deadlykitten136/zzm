// src/auth/auth.js

const TOKEN_KEY = "zzm:auth:token";
const NAME_KEY = "zzm:auth:name";

// ✅ Změň si kód kdykoli tady (a pošli spolužákům)
export const CLASS_CODE = "Qikleslo";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function isAuthed() {
  return Boolean(getToken());
}

export function loginWithCode(code, name = "") {
  const normalized = String(code || "").trim();
  if (!normalized) return { ok: false, reason: "empty" };

  if (normalized !== CLASS_CODE) return { ok: false, reason: "wrong_code" };

  // jednoduchý “token” – pro lokální lock stačí
  const token = `local_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  localStorage.setItem(TOKEN_KEY, token);

  const safeName = String(name || "").trim();
  if (safeName) localStorage.setItem(NAME_KEY, safeName);

  return { ok: true, token };
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  // jméno klidně necháme – nebo smaž:
  // localStorage.removeItem(NAME_KEY);
}

export function getDisplayName() {
  return localStorage.getItem(NAME_KEY) || "";
}
