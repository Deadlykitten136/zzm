import React from "react";

/**
 * Quiz component:
 * - ABCD otázky
 * - okamžité vyhodnocení
 * - ukáže správnou odpověď + vysvětlení
 * - "Další otázka" náhodně, dokud se všechny nevypotřebují, pak nový shuffle a jede to dál
 *
 * Props:
 * - items: Array<{ id, q, options: {A,B,C,D}, correct: "A"|"B"|"C"|"D", explanation?: string }>
 * - storageKey?: string  (pro persist vyčerpaného pořadí na stránce - volitelně)
 */
export default function Quiz({ items, storageKey }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [order, setOrder] = React.useState([]);
  const [idx, setIdx] = React.useState(0);

  const [selected, setSelected] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(null);
  const [locked, setLocked] = React.useState(false);

  // Init / (re)shuffle order
  React.useEffect(() => {
    if (safeItems.length === 0) return;

    // optional: restore order+idx
    if (storageKey) {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (
            parsed &&
            Array.isArray(parsed.order) &&
            typeof parsed.idx === "number" &&
            parsed.order.length === safeItems.length
          ) {
            setOrder(parsed.order);
            setIdx(parsed.idx % parsed.order.length);
            return;
          }
        }
      } catch {
        // ignore
      }
    }

    const newOrder = shuffle([...Array(safeItems.length).keys()]);
    setOrder(newOrder);
    setIdx(0);
  }, [storageKey, safeItems.length]);

  // Persist (optional)
  React.useEffect(() => {
    if (!storageKey) return;
    if (!order || order.length === 0) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ order, idx }));
    } catch {
      // ignore
    }
  }, [storageKey, order, idx]);

  const current = React.useMemo(() => {
    if (!safeItems.length || !order.length) return null;
    const realIndex = order[idx];
    return safeItems[realIndex] || null;
  }, [safeItems, order, idx]);

  function answer(letter) {
    if (!current || locked) return;
    setSelected(letter);
    const ok = letter === current.correct;
    setIsCorrect(ok);
    setLocked(true);
  }

  function next() {
    if (!safeItems.length) return;

    // move forward; if at end -> reshuffle & restart
    const atEnd = order.length > 0 && idx >= order.length - 1;
    if (atEnd) {
      const newOrder = shuffle([...Array(safeItems.length).keys()]);
      setOrder(newOrder);
      setIdx(0);
    } else {
      setIdx((v) => v + 1);
    }

    setSelected(null);
    setIsCorrect(null);
    setLocked(false);
  }

  if (!current) {
    return (
      <div className="quizPlaceholder">
        (Tady zatím nejsou otázky. Přidej sadu do JSONu a propojí se to.)
      </div>
    );
  }

  const letters = ["A", "B", "C", "D"];

  return (
    <div className="quizBox">
      <div className="quizTop">
        <div className="muted small">
          Otázka <strong>{(idx % (order.length || 1)) + 1}</strong> /{" "}
          <strong>{order.length || safeItems.length}</strong>
        </div>
        <div className="muted small">Klikáš do nekonečna ✅</div>
      </div>

      <div className="quizQ">{current.q}</div>

      <div className="quizOptions">
        {letters.map((L) => {
          const text = current.options?.[L];
          if (!text) return null;

          const isSel = selected === L;
          const isRight = locked && L === current.correct;
          const isWrongSel = locked && isSel && L !== current.correct;

          const cls = [
            "quizOption",
            isSel ? "isSelected" : "",
            isRight ? "isCorrect" : "",
            isWrongSel ? "isWrong" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={L}
              className={cls}
              onClick={() => answer(L)}
              disabled={locked}
              type="button"
            >
              <span className="quizLetter">{L}</span>
              <span className="quizText">{text}</span>
            </button>
          );
        })}
      </div>

      {locked && (
        <div className="quizFeedback">
          <div className={isCorrect ? "ok" : "bad"}>
            {isCorrect ? "Správně ✅" : `Špatně ❌ Správně je ${current.correct}.`}
          </div>
          {current.explanation ? (
            <div className="quizExplain">{current.explanation}</div>
          ) : null}

          <button className="btnSmall" onClick={next} type="button">
            Další otázka →
          </button>
        </div>
      )}

      {!locked && (
        <div className="muted small" style={{ marginTop: 8 }}>
          Vyber A/B/C/D. Hned se dozvíš výsledek.
        </div>
      )}
    </div>
  );
}

function shuffle(arr) {
  // Fisher–Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
