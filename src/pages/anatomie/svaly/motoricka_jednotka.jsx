import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function MotorickaJednotka() {
  const pool = useMemo(
    () => [
      { q: "motorická jednotka = 1 motoneuron + co (1 slovo)", a: ["vlakna", "vlákna"] },
      { q: "motorická jednotka řídí jaký typ svaloviny (1 slovo)", a: ["kosterni", "kosterní"] },
      { q: "větší motorická jednotka znamená spíš (1 slovo) sílu", a: ["vetsi", "větší"] },
      { q: "menší motorická jednotka znamená spíš (1 slovo) kontrolu", a: ["jemnejsi", "jemnější", "jemnou"] },
      { q: "síla svalu roste se zvyšujícím se počtem aktivovaných (2 slova)", a: ["motorickychjednotek", "motorickýchjednotek", "motorických jednotek", "motorickych jednotek"] },
      { q: "rychlost a únava souvisí i se zastoupením typů (1 slovo)", a: ["vlaken", "vláken"] },
      { q: "signál pro kontrakci přichází do svalu přes (1 slovo)", a: ["nerv"] },
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
      title="Motorická jednotka"
      lead="Síla a jemnost pohybu závisí na tom, kolik svalových vláken ovládá jeden motoneuron. Tento celek se nazývá motorická jednotka."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Co je motorická jednotka</h2>
          <div className="pageBlock">
            <strong>Motorická jednotka</strong> je základní funkční celek řízení kosterního svalu:
            jeden <strong>motoneuron</strong> a všechna <strong>svalová vlákna</strong>, která tento motoneuron inervuje.
            Když motoneuron vyšle signál, aktivují se jeho vlákna jako celek.
          </div>

          <ul className="pageList">
            <li>Motorická jednotka = 1 motoneuron + skupina svalových vláken.</li>
            <li>Týká se především kosterní (příčně pruhované) svaloviny.</li>
            <li>Aktivace = nervový signál → kontrakce vláken dané jednotky.</li>
          </ul>

          <div className="pageSummary">
            Zapamatuj si: sval se „nezapíná“ celý naráz. Zapínají se motorické jednotky podle potřeby.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Velikost motorické jednotky a funkce</h2>
          <div className="pageBlock">
            Motorické jednotky mohou být malé nebo velké – podle toho, kolik vláken jeden motoneuron řídí.
            Tím se vysvětluje rozdíl mezi jemnou motorikou a hrubou silou.
          </div>

          <ul className="pageList">
            <li>
              <strong>Malá motorická jednotka</strong> = málo vláken → jemnější kontrola pohybu.
            </li>
            <li>
              <strong>Velká motorická jednotka</strong> = mnoho vláken → větší síla, menší přesnost.
            </li>
            <li>V praxi: prsty a mimika mívají menší jednotky než např. stehno.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Síla svalu a zapojení jednotek</h2>
          <div className="pageBlock">
            Síla svalu není jen „jak je sval velký“, ale také <strong>kolik motorických jednotek</strong> je právě aktivovaných.
            Při vyšší potřebě síly se zapojuje více jednotek a zvyšuje se i frekvence nervových impulsů.
          </div>

          <ul className="pageList">
            <li>Síla roste se zvyšujícím se počtem aktivovaných motorických jednotek.</li>
            <li>Zapojení jednotek se přizpůsobuje úkolu (jemnost × síla).</li>
            <li>Rychlost a únava souvisí i se zastoupením typů vláken ve svalu.</li>
          </ul>

          <div className="pageSummary">
            Pro praxi: slabost nemusí být jen „sval je malý“, ale i „špatně se zapojuje“ (řízení, únava, bolest, ochranné napětí).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Motorická jednotka = motoneuron + jeho svalová vlákna.</li>
            <li>Malé jednotky = jemná kontrola, velké jednotky = větší síla.</li>
            <li>Síla roste s počtem aktivovaných motorických jednotek.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: motorická jednotka</h2>
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
