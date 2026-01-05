import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgMimic1 from "../../../assets/anatomie/mimicke.jpg";
import imgMimic2 from "../../../assets/anatomie/mimicke2.jpg";

export default function SvalyHlavyMimicke() {
  const pool = useMemo(
    () => [
      { q: "mimické svaly se upínají typicky na (1 slovo)", a: ["kuzi", "kůži"] },
      { q: "kruhový sval úst se latinsky nazývá (2 slova)", a: ["orbicularis oris"] },
      { q: "kruhový sval oční se latinsky nazývá (2 slova)", a: ["orbicularis oculi"] },
      { q: "mimické svaly jsou zodpovědné hlavně za (1 slovo)", a: ["mimiku", "vyraz", "výraz"] },
      { q: "mimické svaly NEpohybují (1 slovo)", a: ["celisti", "čelistí"] },
      { q: "mimické svaly jsou inervovány nervem (1 slovo)", a: ["facialis"] },
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
      title="Svaly hlavy – mimické"
      lead="Mimické svaly vytvářejí výraz obličeje. Na rozdíl od žvýkacích svalů se neupínají pouze na kost, ale přímo do kůže."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek – mimické svaly</h2>
          <div className="pageBlock">
            <img src={imgMimic1} alt="Mimické svaly obličeje – přehled" className="img" />
            <img src={imgMimic2} alt="Mimické svaly obličeje – detail" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Základní charakteristika</h2>
          <div className="pageBlock">
            Mimické svaly jsou výjimečné tím, že se <strong>upínají do kůže</strong>.
            Jejich kontrakce tedy nepohybuje kostí, ale napíná nebo posouvá kůži,
            čímž vzniká výraz obličeje.
          </div>

          <ul className="pageList">
            <li>Upínají se na kost a do kůže.</li>
            <li>Vytvářejí mimiku – emoce, výraz, komunikaci.</li>
            <li>Jsou velmi jemné a rychlé.</li>
          </ul>

          <div className="pageSummary">
            Mimické svaly jsou zásadní pro neverbální komunikaci – často dříve reagují než vědomá kontrola.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Kruhové svaly</h2>
          <div className="pageBlock">
            Kruhové svaly obklopují otvory v obličeji a fungují jako „svěrače“.
            Umožňují jejich zavření nebo zúžení.
          </div>

          <ul className="pageList">
            <li>
              <strong>m. orbicularis oculi</strong> – zavírání očí, mrkání.
            </li>
            <li>
              <strong>m. orbicularis oris</strong> – sevření rtů, mluvení, pískání.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Další mimické svaly (orientačně)</h2>
          <div className="pageBlock">
            Kromě kruhových svalů existuje řada svalů, které zvedají, stahují nebo svrašťují části obličeje.
          </div>

          <ul className="pageList">
            <li>Čelní sval – zvedá obočí.</li>
            <li>Svrašťovač obočí – mračení.</li>
            <li>Sval smíchový – tah koutků do stran.</li>
          </ul>

          <div className="pageSummary">
            Směr tahu svalu = typ výrazu (nahoru, dolů, do stran).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Inervace mimických svalů</h2>
          <div className="pageBlock">
            Mimické svaly jsou inervovány <strong>nervus facialis</strong>.
            Poškození tohoto nervu se projeví výraznou změnou mimiky.
          </div>

          <ul className="pageList">
            <li>n. facialis řídí většinu mimiky obličeje.</li>
            <li>Porucha vede k asymetrii obličeje.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Mimické svaly se upínají do kůže.</li>
            <li>Vytvářejí výraz obličeje.</li>
            <li>Kruhové svaly fungují jako svěrače.</li>
            <li>Jsou inervovány nervem facialis.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: mimické svaly</h2>
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
