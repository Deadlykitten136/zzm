import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img from "../../../assets/anatomie/svaly_berce.webp";

export default function SvalyBerce() {
  const pool = useMemo(
    () => [
      { q: "hlavní pohyb přední skupiny bérce je (2 slova)", a: ["dorzální flexe", "dorsalni flexe"] },
      { q: "hlavní sval dorzální flexe nohy se latinsky jmenuje (2 slova)", a: ["tibialis anterior"] },
      { q: "extensor hallucis longus je dlouhý (1 slovo) palce", a: ["natahovač", "natahovac"] },
      { q: "laterální skupina bérce pomáhá udržovat (1 slovo) nohy", a: ["klenbu"] },
      { q: "peroneus longus se dnes označuje také jako (1 slovo)", a: ["fibularis"] },
      { q: "zadní skupina bérce je funkčně hlavně (1 slovo)", a: ["flexor"] },
      { q: "největší sval lýtka se jmenuje (2 slova)", a: ["triceps surae"] },
      { q: "Achillova šlacha se latinsky řekne (2 slova)", a: ["tendo calcaneus"] },
      { q: "sval soleus patří do (1 slovo) vrstvy lýtka", a: ["hluboké", "hluboke"] },
      { q: "tibialis posterior se podílí na udržení (1 slovo) klenby", a: ["podélné", "podelne"] },
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
    if (pos + 1 >= deck.length) reshuffle();
    else setPos((p) => p + 1);
  };

  const check = () => {
    const ok = (current.a || []).map(normalize).includes(normalize(input));
    setFeedback(ok ? "Správně ✅" : `Ne ❌ Správně: ${current.a[0]}`);
    setTimeout(next, 650);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Svaly bérce"
      lead="Bérec je klíčový pro chůzi, stabilitu nohy a práci klenby. Funkčně se dělí na přední, laterální a zadní skupinu."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={img} alt="Svaly bérce – přehled skupin" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Funkční rozdělení bérce</h2>
          <ul className="pageList">
            <li><strong>Přední skupina</strong> – dorzální flexe nohy a prstů.</li>
            <li><strong>Laterální skupina</strong> – stabilita a klenba, pomocná plantární flexe.</li>
            <li><strong>Zadní skupina</strong> – plantární flexe nohy, práce s klenbou.</li>
          </ul>

          <div className="pageSummary">
            Jednoduše: vpředu zvedám špičku, vzadu se odrážím, ze strany hlídám stabilitu.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Přední skupina – extenzory</h2>
          <ul className="pageList">
            <li><strong>m. tibialis anterior</strong> – dorzální flexe nohy, podpora klenby.</li>
            <li><strong>m. extensor digitorum longus</strong> – extenze prstů.</li>
            <li><strong>m. extensor hallucis longus</strong> – extenze palce.</li>
          </ul>

          <div className="pageSummary">
            Při slabosti přední skupiny vzniká „plácání“ nohy při chůzi.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Laterální skupina – lýtkové svaly zevní</h2>
          <ul className="pageList">
            <li><strong>m. fibularis (peroneus) longus</strong></li>
            <li><strong>m. fibularis (peroneus) brevis</strong></li>
          </ul>

          <div className="pageBlock">
            Tyto svaly pomáhají udržovat <strong>příčnou i podélnou klenbu</strong>,
            podílejí se na plantární flexi a stabilizují kotník při chůzi.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Zadní skupina – flexory</h2>
          <div className="pageBlock">
            Zadní skupina je nejsilnější část bérce – zajišťuje odraz při chůzi a běhu.
          </div>

          <ul className="pageList">
            <li><strong>m. triceps surae</strong> – gastrocnemius + soleus.</li>
            <li><strong>m. tibialis posterior</strong> – klíčový sval pro klenbu.</li>
            <li><strong>m. flexor digitorum longus</strong></li>
            <li><strong>m. flexor hallucis longus</strong></li>
          </ul>

          <div className="pageSummary">
            Achillova šlacha (<strong>tendo calcaneus</strong>) přenáší sílu lýtka na patní kost.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Přední skupina = dorzální flexe.</li>
            <li>Laterální skupina = stabilita + klenba.</li>
            <li>Zadní skupina = plantární flexe + odraz.</li>
            <li>Bérec je klíčový pro ekonomickou chůzi.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly bérce</h2>
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
