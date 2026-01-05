// src/pages/login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginWithCode, isAuthed, CLASS_CODE } from "../auth/auth.js";

export default function LoginPage() {
  const navigate = useNavigate();
  const [code, setCode] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (isAuthed()) navigate("/", { replace: true });
  }, [navigate]);

  function onSubmit(e) {
    e.preventDefault();
    setError("");

    const res = loginWithCode(code, name);

    if (!res.ok) {
      if (res.reason === "wrong_code") {
        setError("Špatný kód. Zkus to znovu.");
      } else {
        setError("Zadej prosím kód.");
      }
      return;
    }

    navigate("/", { replace: true });
  }

  return (
    <div className="page">
      <div className="pageCard">
        <div className="card">
          <h1 className="pageTitle">Přihlášení</h1>
          <div className="muted">
            Tohle není veřejná aplikace. Pro vstup zadej sdílený kód pro skupinu.
          </div>
        </div>

        <div className="card">
          <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
            <div>
              <div className="small muted">Jméno / přezdívka (volitelné)</div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="např. Kačka"
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <div className="small muted">Heslo</div>
              <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="kód od spolužáka"
                style={{ width: "100%" }}
              />
              <div className="small muted" style={{ marginTop: 6 }}>
                (Kód je teď nastavený v <code>src/auth/auth.js</code>)
              </div>
            </div>

            {error ? (
              <div className="pageSummary">
                <strong>Ups:</strong> {error}
              </div>
            ) : null}

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button type="submit" className="btnPrimary">
                Vstoupit
              </button>
              <button
                type="button"
                className="btnGhost"
                onClick={() => {
                  setCode("");
                  setError("");
                }}
              >
                Vymazat
              </button>
            </div>
          </form>
        </div>

        <div className="quizPlaceholder">
          <strong>Poznámka:</strong> Tohle je “lokální zámek” (kvůli soukromí a
          obrázkům). Skutečné účty + ukládání progresu pro každého uděláme potom
          přes Supabase/Firebase.
        </div>
      </div>
    </div>
  );
}
