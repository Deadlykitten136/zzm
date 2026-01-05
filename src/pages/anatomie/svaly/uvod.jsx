import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function UvodSvalu() {
  const pool = useMemo(
    () => [
      { q: "svaly jsou funkční složkou jakého aparátu", a: ["aktivniho pohyboveho", "aktivního pohybového"] },
      { q: "jak se latinsky řekne sval", a: ["musculus"] },
      { q: "jak se latinsky řeknou svaly", a: ["musculi"] },
      { q: "kolik svalů je přibližně v lidském těle", a: ["600", "okolo600", "cca600"] },
      { q: "většina svalů v těle je jakých (1 slovo)", a: ["parovych", "párových"] },
      { q: "svaly patří k aktivní nebo pasivní části pohybového aparátu", a: ["aktivni", "aktivní"] },
      { q: "která tkáň umožňuje pohyb těla", a: ["svalova", "svalová"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");

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
    const isOk = accepted.includes(ans);

    if (isOk) {
      setFeedback("Správně ✅");
    } else {
      setFeedback(`Ne ❌ Správně: ${current.a[0]}`);
    }

    setTimeout(() => next(), 600);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Svaly – úvod"
      lead="Svaly tvoří aktivní složku pohybového aparátu. Umožňují pohyb, udržení polohy těla i stabilitu jednotlivých částí."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Základní charakteristika svalů</h2>
          <div className="pageBlock">
            Svaly (latinsky musculi) jsou funkční složkou aktivního pohybového aparátu.
            Jejich hlavním úkolem je vytvářet pohyb nebo udržovat určitou polohu těla.
          </div>

          <ul className="pageList">
            <li>Svalová tkáň umožňuje aktivní pohyb těla.</li>
            <li>Sval se zkracuje, uvolňuje nebo udržuje napětí.</li>
            <li>Svaly spolupracují s kostmi a klouby.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Počet a rozložení svalů</h2>
          <div className="pageBlock">
            V lidském těle se nachází přibližně 600 svalů. Většina z nich je párových,
            tedy symetricky uložených na pravé a levé straně těla.
          </div>

          <ul className="pageList">
            <li>Přibližně 600 svalů v těle.</li>
            <li>Většina svalů je párových.</li>
            <li>Svaly se liší velikostí, tvarem i funkcí.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Aktivní × pasivní pohybový aparát</h2>
          <div className="pageBlock">
            Pohybový aparát rozlišujeme na aktivní a pasivní část.
            Svaly patří mezi aktivní složku, protože jsou schopné se samy stahovat.
          </div>

          <ul className="pageList">
            <li><strong>Aktivní část</strong> – svaly.</li>
            <li><strong>Pasivní část</strong> – kosti, klouby, vazy.</li>
            <li>Pohyb vzniká souhrou obou částí.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Svaly = musculi.</li>
            <li>Tvoří aktivní složku pohybového aparátu.</li>
            <li>V těle je přibližně 600 svalů.</li>
            <li>Většina svalů je párových.</li>
            <li>Bez svalů není možný aktivní pohyb.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: základní orientace ve svalech</h2>

          <div className="pageBlock">
            <strong>Otázka:</strong> {current?.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napište odpověď (1–2 slova)"
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
