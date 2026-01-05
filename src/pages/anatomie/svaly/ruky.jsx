import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img from "../../../assets/anatomie/svaly_dlan.jpg";

export default function SvalyRuky() {
  const pool = useMemo(
    () => [
      { q: "svaly palcové vyvýšeniny se nazývají (1 slovo)", a: ["thenar"] },
      { q: "svaly malíkové vyvýšeniny se nazývají (1 slovo)", a: ["hypothenar"] },
      { q: "mezikostní svaly se latinsky řeknou (1 slovo)", a: ["interossei"] },
      { q: "červovité svaly se latinsky řeknou (1 slovo)", a: ["lumbricales"] },
      { q: "abdukce prstů znamená pohyb (2 slova)", a: ["od osy", "od osy"] },
      { q: "addukce prstů znamená pohyb (2 slova)", a: ["k ose", "k ose"] },
      { q: "osa ruky pro abdukci/addukci prstů vede přes (1 slovo)", a: ["prostředník", "prostrednik"] },
      { q: "thenar se týká hlavně (1 slovo)", a: ["palce"] },
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
      title="Svaly ruky"
      lead="Vlastní svaly ruky umožňují jemnou motoriku, stabilizaci prstů a přesné úchopy. Prakticky je nejdůležitější orientace v thenaru/hypothenaru a pochopení abdukce a addukce prstů."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={img} alt="Svaly dlaně – thenar, hypothenar a střední skupina" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Co znamená „vlastní svaly ruky“</h2>
          <div className="pageBlock">
            Vlastní (intrinsické) svaly ruky jsou svaly, které začínají i končí v oblasti ruky.
            Nejsou to dlouhé šlachy z předloktí, ale svaly, které umožňují <strong>jemné nastavení prstů</strong>
            a stabilizaci při úchopu. Bez nich by ruka byla silná, ale „nešikovná“.
          </div>

          <ul className="pageList">
            <li>Jemná motorika a přesnost.</li>
            <li>Stabilizace prstů při úchopu.</li>
            <li>Koordinace pohybů více kloubů prstu zároveň.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: předloktí dodá sílu, vlastní svaly ruky dodají přesnost.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Thenar a hypothenar</h2>
          <div className="pageBlock">
            Na dlani jsou dvě výrazné svalové vyvýšeniny. Díky nim umíme tvořit různé typy úchopu.
          </div>

          <ul className="pageList">
            <li>
              <strong>Thenar</strong> – palcová vyvýšenina (svaly palce).
            </li>
            <li>
              <strong>Hypothenar</strong> – malíková vyvýšenina (svaly malíku).
            </li>
          </ul>

          <div className="pageSummary">
            Palec je klíč pro většinu úchopů – proto je thenar funkčně „nejdůležitější vyvýšenina“ ruky.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Střední skupina: lumbricales a interossei</h2>
          <div className="pageBlock">
            Střed dlaně tvoří svaly, které jemně nastavují prsty a umožňují „přesné prstové práce“.
            Důležité jsou hlavně <strong>lumbricales</strong> a <strong>interossei</strong>.
          </div>

          <ul className="pageList">
            <li><strong>lumbricales</strong> – červovité svaly, jemné nastavení prstů.</li>
            <li><strong>interossei</strong> – mezikostní svaly, důležité pro pohyby prstů do stran.</li>
          </ul>

          <div className="pageSummary">
            Interossei jsou klíčové pro abdukci a addukci prstů – to je typická testovací otázka.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Abdukce a addukce prstů</h2>
          <div className="pageBlock">
            U prstů je potřeba vědět, že abdukce/addukce se hodnotí vůči <strong>ose ruky</strong>.
            Osa ruky pro prsty prochází <strong>prostředníkem</strong>.
          </div>

          <ul className="pageList">
            <li><strong>Abdukce prstů</strong> = pohyb <strong>od osy</strong> (od prostředníku).</li>
            <li><strong>Addukce prstů</strong> = pohyb <strong>k ose</strong> (k prostředníku).</li>
            <li>Prostředník je „střed“ – od něj se měří do stran.</li>
          </ul>

          <div className="pageSummary">
            Pomůcka: prostředník je král – všichni se od něj vzdalují (abdukce) nebo se k němu vracejí (addukce).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Vlastní svaly ruky zajišťují jemnou motoriku a stabilizaci prstů.</li>
            <li>Thenar = palec, hypothenar = malík.</li>
            <li>Lumbricales a interossei jemně nastavují prsty.</li>
            <li>Abdukce prstů = od osy, addukce = k ose; osa vede přes prostředník.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly ruky</h2>
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
