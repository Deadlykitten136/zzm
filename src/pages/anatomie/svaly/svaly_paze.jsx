import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function SvalyPaze() {
  const pool = useMemo(
    () => [
      { q: "dvojhlavý sval pažní se latinsky řekne (2 slova)", a: ["biceps brachii"] },
      { q: "trojhlavý sval pažní se latinsky řekne (2 slova)", a: ["triceps brachii"] },
      { q: "biceps je hlavní sval pro (1 slovo)", a: ["supinaci"] },
      { q: "triceps je hlavní extenzor (1 slovo)", a: ["lokte", "lokte"] },
      { q: "sval, který ohýbá loket silně i bez supinace, je (1 slovo)", a: ["brachialis"] },
      { q: "olecranon je úpon šlachy (1 slovo)", a: ["tricepsu", "triceps"] },
      { q: "přední skupina paže je hlavně (1 slovo)", a: ["flexory"] },
      { q: "zadní skupina paže je hlavně (1 slovo)", a: ["extenzory"] },
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
    const idx = pool.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  });

  const [pos, setPos] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const current = pool[deck[pos]];

  const reshuffle = () => {
    const idx = pool.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    setDeck(idx);
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
    const ok = (current.a || []).map(normalize).includes(normalize(input));
    setFeedback(ok ? "Správně ✅" : `Ne ❌ Správně: ${current.a[0]}`);
    setTimeout(next, 600);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Svaly paže"
      lead="Svaly paže zajišťují hlavně pohyby v lokti a částečně i v rameni. Prakticky je klíčové chápat rozdíl mezi flexory a extenzory a roli bicepsu v supinaci."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Rozdělení svalů paže</h2>
          <div className="pageBlock">
            Svaly paže se obvykle dělí na <strong>přední skupinu</strong> (hlavně flexory lokte)
            a <strong>zadní skupinu</strong> (hlavně extenzory lokte). Nejde jen o „sílu“,
            ale o funkční řízení pohybu a stabilitu při práci rukou.
          </div>

          <ul className="pageList">
            <li>Přední skupina: flexe lokte (ohyb).</li>
            <li>Zadní skupina: extenze lokte (natažení).</li>
            <li>Některé svaly se účastní i pohybů v rameni.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Přední skupina (flexory)</h2>
          <div className="pageBlock">
            Přední skupina paže obsahuje svaly, které ohýbají loket. Nejznámější je biceps, ale pro praxi je důležité vědět,
            že biceps není „jen flexor“ – je to také klíčový sval pro <strong>supinaci</strong>.
          </div>

          <ul className="pageList">
            <li><strong>m. biceps brachii</strong> – flexe lokte + silná supinace předloktí.</li>
            <li><strong>m. brachialis</strong> – čistý silný flexor lokte (funguje i bez supinace).</li>
            <li><strong>m. coracobrachialis</strong> – účast na pohybech v rameni (stabilizace/tažení paže).</li>
          </ul>

          <div className="pageSummary">
            Zapamatuj si: biceps = flexe + supinace. Brachialis = „nejjistější“ flexor lokte.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. biceps brachii – proč je supinace tak důležitá</h2>
          <div className="pageBlock">
            <strong>Supinace</strong> je otočení předloktí tak, že dlaň směřuje vzhůru (nebo dopředu v anatomické poloze).
            Biceps je v supinaci velmi účinný. Proto při práci s rukou (šroubování, otvírání lahví, přitažení předmětu)
            bývá biceps přetěžován i tehdy, když není loket výrazně ohnutý.
          </div>

          <ul className="pageList">
            <li>Biceps je silný supinátor předloktí.</li>
            <li>Flexe lokte je „viditelná“, supinace je často důležitější funkčně.</li>
            <li>Přetížení: práce rukou + rotace předloktí.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Zadní skupina (extenzory)</h2>
          <div className="pageBlock">
            Zadní skupina paže je funkčně jednodušší: hlavním svalem je <strong>m. triceps brachii</strong>,
            který natahuje loket. Je zásadní pro stabilitu při oporách (např. klik) i pro „odtlačení“.
          </div>

          <ul className="pageList">
            <li><strong>m. triceps brachii</strong> – extenze lokte.</li>
            <li>Úpon na <strong>olecranon</strong> (loketní kost – okovec).</li>
            <li>Důležitý pro oporu o horní končetinu (stabilita).</li>
          </ul>

          <div className="pageSummary">
            Triceps je klíčový i pro „posturu horní končetiny“ – bez něj se rameno i lopatka hůř stabilizují v opoře.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Svaly paže dělíme na přední (flexory) a zadní (extenzory).</li>
            <li>Biceps brachii: flexe lokte + supinace.</li>
            <li>Brachialis: silný flexor lokte i bez supinace.</li>
            <li>Triceps brachii: extenze lokte, úpon na olecranon.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly paže</h2>
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
