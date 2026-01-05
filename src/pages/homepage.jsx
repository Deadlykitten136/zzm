import React from "react";
import { Link } from "react-router-dom";

// Načte všechny flow soubory automaticky (homepage se pak už neupravuje)
const flowModules = import.meta.glob("../data/flow/*.json", { eager: true });

function flattenFlow(flow) {
  if (!flow) return [];
  if (Array.isArray(flow.items)) return flow.items;
  if (Array.isArray(flow.sections)) {
    return flow.sections.flatMap((s) => (Array.isArray(s.items) ? s.items : []));
  }
  return [];
}

function readProgress(moduleId) {
  const idxRaw = localStorage.getItem(`zzm:progress:${moduleId}:index`);
  const idx = idxRaw ? Number(idxRaw) : 0;
  return Number.isFinite(idx) && idx >= 0 ? idx : 0;
}

function formatCountdownParts(now, exam) {
  const ms = exam.getTime() - now.getTime();
  if (ms <= 0) return { done: true, days: 0, hours: 0, minutes: 0 };

  const totalMinutes = Math.floor(ms / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes - days * 60 * 24) / 60);
  const minutes = totalMinutes - days * 60 * 24 - hours * 60;

  return { done: false, days, hours, minutes };
}

function pickDailyPlan(allModules, daysLeft) {
  const remainingItems = allModules.flatMap((m) => {
    const idx = readProgress(m.moduleId);
    const items = flattenFlow(m);
    return items.slice(idx);
  });

  const remainingCount = remainingItems.length;
  const perDay = Math.max(1, Math.ceil(remainingCount / Math.max(1, daysLeft)));
  const cap = Math.min(perDay, 12);

  const queues = allModules
    .map((m) => {
      const idx = readProgress(m.moduleId);
      const items = flattenFlow(m);
      return {
        moduleId: m.moduleId,
        title: m.title,
        items: items.slice(idx),
        cursor: 0
      };
    })
    .filter((q) => q.items.length > 0);

  const plan = [];
  let safety = 0;

  while (plan.length < cap && queues.length > 0 && safety < 5000) {
    safety += 1;

    queues.sort((a, b) => (b.items.length - b.cursor) - (a.items.length - a.cursor));

    for (const q of queues) {
      if (plan.length >= cap) break;
      if (q.cursor < q.items.length) {
        const it = q.items[q.cursor++];
        plan.push({ ...it, moduleTitle: q.title });
      }
    }

    for (let i = queues.length - 1; i >= 0; i--) {
      if (queues[i].cursor >= queues[i].items.length) queues.splice(i, 1);
    }
  }

  return { perDay, plan, remainingCount };
}

// --- nastavení zkoušky (každý uživatel si může nastavit svoje, uloží se lokálně) ---
function isoToDateInput(iso) {
  return iso.slice(0, 10);
}
function isoToTimeInput(iso) {
  const t = iso.slice(11, 16);
  return t || "09:00";
}

export default function HomePage() {
  const defaultExamIso = "2026-02-07T09:00:00+01:00";

  const [examIso, setExamIso] = React.useState(() => {
    return localStorage.getItem("zzm:examDate") || defaultExamIso;
  });

  const examDate = React.useMemo(() => new Date(examIso), [examIso]);

  function updateExam(dateStr, timeStr) {
    const safeTime = timeStr && timeStr.length === 5 ? timeStr : "09:00";
    const nextIso = `${dateStr}T${safeTime}:00+01:00`;
    setExamIso(nextIso);
    localStorage.setItem("zzm:examDate", nextIso);
  }

  const [now, setNow] = React.useState(() => new Date());

  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const modules = React.useMemo(() => {
    const arr = Object.values(flowModules).map((m) => (m.default ? m.default : m));
    const order = ["prvni_pomoc", "anatomie", "fyziologie_patologie", "farmakologie", "krevni_testy"];
    arr.sort((a, b) => order.indexOf(a.moduleId) - order.indexOf(b.moduleId));
    return arr;
  }, []);

  const countdown = formatCountdownParts(now, examDate);

  const daysLeft = Math.max(
    0,
    Math.ceil((examDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );

  const moduleStats = modules.map((m) => {
    const items = flattenFlow(m);
    const total = items.length;

    const idx = readProgress(m.moduleId);
    const doneApprox = Math.min(idx, total);
    const remaining = Math.max(0, total - doneApprox);

    const startPath = total > 0 ? items[0].path : `/${m.moduleId}`;
    const continuePath = total > 0 ? (items[Math.min(idx, total - 1)]?.path ?? startPath) : startPath;

    return {
      ...m,
      items,
      total,
      doneApprox,
      remaining,
      startPath,
      continuePath
    };
  });

  const totalAll = moduleStats.reduce((s, m) => s + m.total, 0);
  const doneAll = moduleStats.reduce((s, m) => s + m.doneApprox, 0);
  const remainingAll = Math.max(0, totalAll - doneAll);
  const modulesRemaining = moduleStats.filter((m) => m.remaining > 0).length;

  const [plan, setPlan] = React.useState(null);
  function generatePlan() {
    const { perDay, plan, remainingCount } = pickDailyPlan(modules, daysLeft);
    setPlan({ perDay, plan, remainingCount });
  }

  const motivation = React.useMemo(() => {
    if (countdown.done) return "Zkouška je tady. Dýchat. Pomalu. Zvládneš.";
    if (daysLeft <= 7) return "Týden. Krátké bloky, ostré opakování, žádné hrdinství — jen konzistence.";
    if (daysLeft <= 14) return "Dva týdny. Každý den malý posun = obrovská výhoda.";
    return "Stačí držet rytmus. Ne dokonalost — rytmus.";
  }, [daysLeft, countdown.done]);

  return (
    <div className="homeGrid">
      <div className="homeLeft">
        <section className="hero card">
          <div className="heroTop">
            <div>
              <h1 className="heroTitle">ZZM – učební cockpit</h1>
              <div className="muted">
                Odpočet:{" "}
                <strong>
                  {countdown.done
                    ? "0"
                    : `${countdown.days} dní ${countdown.hours} h ${countdown.minutes} min`}
                </strong>
              </div>
            </div>

            <div className="heroStats">
              <div className="statBox">
                <div className="statNum">{remainingAll}</div>
                <div className="statLabel">zbývá mikrostránek</div>
              </div>
              <div className="statBox">
                <div className="statNum">{modulesRemaining}</div>
                <div className="statLabel">modulů zbývá</div>
              </div>
              <div className="statBox">
                <div className="statNum">{daysLeft}</div>
                <div className="statLabel">dní do zkoušky</div>
              </div>
            </div>
          </div>

          <div className="heroBottom">
            <div className="motivation">{motivation}</div>

            <div className="heroActions">
              <button className="btnPrimary" onClick={generatePlan}>
                Vygenerovat dnešní plán
              </button>
              <Link className="btnGhost" to="/test">
                Velký test (mix)
              </Link>
            </div>

            <div className="muted small">
              Dnešní plán se počítá z flow souborů podle zbývajících dní. Velký test bude losovat
              otázky v rozumném poměru mezi moduly (až doplníme banky otázek).
            </div>
          </div>
        </section>

        {plan && (
          <section className="card">
            <div className="planHeader">
              <h2>Dnešní plán</h2>
              <div className="muted">
                Doporučení: <strong>{plan.perDay}</strong> mikrostránek/den • Zbývá celkem:{" "}
                <strong>{plan.remainingCount}</strong>
              </div>
            </div>

            {plan.plan.length === 0 ? (
              <p className="muted">Zatím není z čeho plánovat (doplň flow položky).</p>
            ) : (
              <ol className="planList">
                {plan.plan.map((it) => (
                  <li key={it.path} className="planItem">
                    <div className="planMeta muted">{it.moduleTitle}</div>
                    <Link to={it.path} className="planLink">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </section>
        )}

        <section className="card">
          <div className="sectionTitle">
            <h2>Moduly</h2>
            <div className="muted small">
              Postup je lineární (flow). Jakmile doplníš položky do flow souborů, všechno se tady samo
              přepočítá.
            </div>
          </div>

          <div className="grid">
            {moduleStats.map((m) => (
              <div key={m.moduleId} className="tile2">
                <div className="tileTop">
                  <strong>{m.title}</strong>
                  <span className="pill">{m.total} mikro</span>
                </div>

                <div className="muted small" style={{ marginTop: 6 }}>
                  Hotovo (orientačně): {m.doneApprox} • Zbývá: {m.remaining}
                </div>

                <div className="tileActions">
                  <Link className="btnSmall" to={m.startPath}>
                    Začít
                  </Link>
                  <Link className="btnSmallGhost" to={m.continuePath}>
                    Pokračovat
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="muted small" style={{ marginTop: 10 }}>
            „Hotovo“ je zatím počítané z indexu v modulu (později zpřesníme bez nutnosti upravovat
            homepage).
          </div>
        </section>
      </div>

      <div className="homeRight">
        <section className="card">
          <h2>Zkouška</h2>
          <div className="muted" style={{ marginTop: 6 }}>
            Každý si může nastavit vlastní datum (uloží se lokálně).
          </div>

          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <label className="muted small">
              Datum
              <div>
                <input
                  type="date"
                  value={isoToDateInput(examIso)}
                  onChange={(e) => updateExam(e.target.value, isoToTimeInput(examIso))}
                />
              </div>
            </label>

            <label className="muted small">
              Čas (volitelně)
              <div>
                <input
                  type="time"
                  value={isoToTimeInput(examIso)}
                  onChange={(e) => updateExam(isoToDateInput(examIso), e.target.value)}
                />
              </div>
            </label>

            <button
              className="btnGhost"
              onClick={() => {
                setExamIso(defaultExamIso);
                localStorage.setItem("zzm:examDate", defaultExamIso);
              }}
            >
              Reset na výchozí (7. 2. 2026)
            </button>
          </div>
        </section>

        <section className="card">
          <h2>Velký test (mix)</h2>
          <p className="muted small">
            Náhodné otázky v rozumném poměru mezi moduly (až doplníme banky otázek).
          </p>
          <div style={{ marginTop: 10 }}>
            <Link className="btnPrimary" to="/test">
              Spustit velký test
            </Link>
          </div>
        </section>

        <section className="card">
          <h2>Malá motivace</h2>
          <p className="muted">
            Když dnes uděláš plán, zítřek bude lehčí. A když zítra uděláš plán, únor nebude strašit.
          </p>
        </section>
      </div>
    </div>
  );
}
