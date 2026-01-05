import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import pool from "../../../data/questions/anatomie_pool.json";

export default function TestAnatomie() {
  const TAGS = ["základy", "kosti", "spojení", "svaly"];

  // pool očekává pole objektů:
  // { id, tag, type:"mcq", prompt, options:[...4], answer:0-3 }
  const allQuestions = useMemo(() => {
    const arr = Array.isArray(pool) ? pool : [];
    // základní hygienická kontrola, aby test nespadl na rozbité otázce
    return arr.filter(
      (q) =>
        q &&
        typeof q.prompt === "string" &&
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        typeof q.answer === "number" &&
        q.answer >= 0 &&
        q.answer <= 3 &&
        typeof q.tag === "string"
    );
  }, []);

  const [selectedTags, setSelectedTags] = useState(() => new Set(TAGS)); // default: vše
  const [deck, setDeck] = useState([]); // pole indexů do filtered
  const [pos, setPos] = useState(0);

  const [picked, setPicked] = useState(null); // 0-3
  const [feedback, setFeedback] = useState(null); // {ok, text}

  const filtered = useMemo(() => {
    return allQuestions.filter((q) => selectedTags.has(q.tag));
  }, [allQuestions, selectedTags]);

  const shuffleIndices = (n) => {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const startOrReset = () => {
    const d = shuffleIndices(filtered.length);
    setDeck(d);
    setPos(0);
    setPicked(null);
    setFeedback(null);
  };

  const current = useMemo(() => {
    if (!filtered.length) return null;
    if (!deck.length) return null;
    const idx = deck[pos];
    return filtered[idx] || null;
  }, [filtered, deck, pos]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) => {
      const copy = new Set(prev);
      if (copy.has(tag)) copy.delete(tag);
      else copy.add(tag);
      return copy;
    });
    // po změně tagů resetujeme běh (nový balíček)
    setDeck([]);
    setPos(0);
    setPicked(null);
    setFeedback(null);
  };

  const choose = (optIndex) => {
    if (!current) return;
    if (picked !== null) return;

    setPicked(optIndex);

    const ok = optIndex === current.answer;
    setFeedback({
      ok,
      text: ok
        ? "Správně ✅"
        : `Ne ❌ Správně je: ${String.fromCharCode(65 + current.answer)}`,
    });
  };

  const next = () => {
    setPicked(null);
    setFeedback(null);

    if (!filtered.length) return;

    // když deck ještě není připravený (např. po změně tagů), začni
    if (!deck.length) {
      startOrReset();
      return;
    }

    if (pos + 1 >= deck.length) {
      // došly otázky pro aktuální filtr => znovu promíchat a jet dál
      const d = shuffleIndices(filtered.length);
      setDeck(d);
      setPos(0);
      return;
    }

    setPos((p) => p + 1);
  };

  // auto-start: pokud jsou vybrané tagy + existují otázky + deck je prázdný, připravíme ho
  useMemo(() => {
    if (filtered.length && !deck.length) {
      const d = shuffleIndices(filtered.length);
      setDeck(d);
      setPos(0);
      setPicked(null);
      setFeedback(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered.length]);

  return (
    <PageLayout
      title="Test: Anatomie"
      lead="Vyberte si okruhy (tagy) a procvičujte otázky z poolu. Otázky se točí náhodně a po vyčerpání se znovu promíchají."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Výběr tagů</h2>
          <div className="pageBlock">
            Vyberte, z čeho chcete testovat. (Základy = buňka + tkáně + názvosloví.)
          </div>

          <ul className="pageList">
            {TAGS.map((t) => (
              <li key={t}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedTags.has(t)}
                    onChange={() => toggleTag(t)}
                  />{" "}
                  {t}
                </label>
              </li>
            ))}
          </ul>

          <div className="pageSummary">
            Vybráno: {Array.from(selectedTags).join(", ") || "nic"} <br />
            Otázek v poolu pro výběr: {filtered.length} / {allQuestions.length}
          </div>

          <button
            onClick={startOrReset}
            disabled={!filtered.length || selectedTags.size === 0}
          >
            Reset & promíchat
          </button>
        </div>

        <div className="card">
          <h2 className="pageH2">Otázka</h2>

          {!filtered.length && (
            <div className="pageBlock">
              Pro vybrané tagy nejsou v <strong>anatomie_pool.json</strong> žádné použitelné otázky.
            </div>
          )}

          {current && (
            <>
              <div className="pageBlock">
                <strong>{current.prompt}</strong>
              </div>

              <ul className="pageList">
                {current.options.map((opt, i) => (
                  <li key={i}>
                    <button onClick={() => choose(i)} disabled={picked !== null}>
                      {String.fromCharCode(65 + i)}. {opt}
                    </button>
                  </li>
                ))}
              </ul>

              {feedback && <div className="pageSummary">{feedback.text}</div>}

              <button onClick={next} disabled={!current || picked === null}>
                Další
              </button>

              <div className="pageSummary">
                Tag: <strong>{current.tag}</strong>
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
