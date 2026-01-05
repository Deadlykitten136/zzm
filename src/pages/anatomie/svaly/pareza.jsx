import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function SvalyHlavyPareza() {
  const pool = useMemo(
    () => [
      { q: "mimické svaly jsou řízeny nervem (1 slovo)", a: ["facialis"] },
      { q: "paréza znamená (1 slovo)", a: ["oslabení", "oslabeni"] },
      { q: "při paréze n. facialis často klesá (1 slovo)", a: ["koutek"] },
      { q: "při paréze n. facialis může být problém zavřít (1 slovo)", a: ["oko"] },
      { q: "typický projev parézy v obličeji je (1 slovo)", a: ["asymetrie"] },
      { q: "mimika se mění hlavně na jedné (1 slovo)", a: ["straně", "strane"] },
      { q: "nerv, který řídí mimiku, se česky nazývá nerv (1 slovo)", a: ["lícní"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ");

  const [deck, setDeck] = useState(() => {
    const indices = pool.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  const [pos, setPos] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const current = pool[deck[pos]];

  const reshuffle = () => {
    const indices = pool.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setDeck(indices);
    setPos(0);
  };

  const next = () => {
    setFeedback(null);
    setInput("");
    if (pos + 1 >= deck.length) {
      reshuffle();
    } else {
      setPos((p) => p + 1);
    }
  };

  const check = () => {
    const ans = normalize(input);
    const accepted = (current?.a || []).map(normalize);
    const ok = accepted.includes(ans);

    setFeedback(ok ? "Správně ✅" : `Ne ❌ Správně: ${current.a[0]}`);
    setTimeout(() => next(), 600);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Svaly hlavy – paréza (mimika)"
      lead="Porucha nervu, který řídí mimické svaly, vede k typickým změnám výrazu obličeje. Prakticky je důležité rozpoznat základní projevy parézy n. facialis."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Co znamená paréza</h2>
          <div className="pageBlock">
            <strong>Paréza</strong> znamená <strong>oslabení</strong> funkce – v tomto případě oslabení ovládání
            mimických svalů. Není to úplná ztráta funkce, ale svaly (a mimika) nepracují plnohodnotně.
          </div>

          <ul className="pageList">
            <li>Paréza = oslabení (ne úplná ztráta).</li>
            <li>U obličeje je okamžitě viditelná jako změna mimiky.</li>
            <li>Často se projeví jednostranně.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Který nerv řídí mimické svaly</h2>
          <div className="pageBlock">
            Mimické svaly jsou inervovány <strong>nervus facialis</strong> (česky lícní nerv).
            Když je jeho funkce oslabená, svaly na postižené straně obličeje se nehýbou stejně jako na zdravé.
          </div>

          <ul className="pageList">
            <li>Latinsky: <strong>n. facialis</strong>.</li>
            <li>Česky: <strong>lícní nerv</strong>.</li>
            <li>Řídí většinu mimických svalů.</li>
          </ul>

          <div className="pageSummary">
            Důležité: žvýkací svaly nejsou řízeny n. facialis – patří funkčně do jiné skupiny než mimické.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Typické projevy parézy n. facialis</h2>
          <div className="pageBlock">
            Při paréze se typicky objeví <strong>asymetrie obličeje</strong>. Výrazná je hlavně při mluvení,
            smíchu nebo snaze zavřít oči.
          </div>

          <ul className="pageList">
            <li><strong>Pokles koutku</strong> na postižené straně.</li>
            <li><strong>Obtížné zavření oka</strong> (neúplné mrkání).</li>
            <li><strong>Zploštění mimiky</strong> (méně vrásek, menší pohyb obočí).</li>
            <li><strong>Asymetrie</strong> při úsměvu a řeči.</li>
          </ul>

          <div className="pageSummary">
            Praktická poznámka: problém se zavřením oka je důležitý i kvůli ochraně rohovky (oko může vysychat).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Proč to dává smysl i pro TČM praxi</h2>
          <div className="pageBlock">
            Pro terapeutickou praxi je užitečné vědět, že se nejedná jen o „svaly“, ale o poruchu řízení.
            Pokud nerv nevede signál, sval nemusí reagovat – i kdyby byl sám o sobě zdravý.
          </div>

          <ul className="pageList">
            <li>Paréza = problém v řízení (nerv), ne jen ve svalu.</li>
            <li>Asymetrie obličeje je hlavní orientační znak.</li>
            <li>U obličeje se projeví velmi rychle a viditelně.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Paréza = oslabení funkce.</li>
            <li>Mimické svaly řídí n. facialis (lícní nerv).</li>
            <li>Projev: asymetrie, pokles koutku, problém zavřít oko.</li>
            <li>Nejde jen o sval, ale o řízení nervem.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: paréza (mimika)</h2>
          <div className="pageBlock">
            <strong>Otázka:</strong> {current.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napište odpověď"
              autoComplete="off"
            />
            <button type="submit">Odeslat</button>
          </form>

          {feedback && <div className="pageSummary">{feedback}</div>}
        </div>

      </div>
    </PageLayout>
  );
}
