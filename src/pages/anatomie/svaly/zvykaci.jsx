import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgMasseter from "../../../assets/anatomie/masseter.webp";
import imgPterygoidei from "../../../assets/anatomie/pterygoidei.png";

export default function SvalyHlavyZvykaci() {
  const pool = useMemo(
    () => [
      { q: "žvýkací sval se latinsky řekne (1 slovo)", a: ["masseter"] },
      { q: "spánkový sval se latinsky řekne (1 slovo)", a: ["temporalis"] },
      { q: "skupina vnitřních žvýkacích svalů se nazývá (1 slovo)", a: ["pterygoidei"] },
      { q: "hlavní funkce žvýkacích svalů je pohyb (2 slova)", a: ["dolni celisti", "dolní čelisti"] },
      { q: "masseter primárně dolní čelist (1 slovo)", a: ["prituje", "přitahuje", "zveda", "zvedá"] },
      { q: "pterygoidei umožňují posun dolní čelisti dopředu a do (1 slovo)", a: ["stran", "strany"] },
      { q: "třecí pohyby při žvýkání jsou typicky posun do stran + (1 slovo)", a: ["dopredu", "dopředu"] },
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
      title="Svaly hlavy – žvýkací"
      lead="Žvýkací svaly zajišťují pohyby dolní čelisti. Umožňují zavření úst, posun čelisti dopředu a do stran i třecí pohyby při žvýkání."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Základní princip</h2>
          <div className="pageBlock">
            Žvýkací svaly pracují kolem čelistního kloubu a pohybují <strong>dolní čelistí</strong>.
            Pro praxi je nejdůležitější chápat, že nejde jen o „otevřít/zavřít“, ale také o <strong>posuny</strong>
            (dopředu, do stran), které umožňují efektivní tření potravy.
          </div>

          <ul className="pageList">
            <li>Pohybují dolní čelistí (mandibulou).</li>
            <li>Umožňují elevaci (zavření), posun a třecí pohyby.</li>
            <li>Často se přetěžují u bruxismu (skřípání, zatínání).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">m. temporalis (spánkový sval)</h2>
          <div className="pageBlock">
            <strong>m. temporalis</strong> je velký žvýkací sval uložený ve spánkové oblasti.
            Funkčně se podílí hlavně na <strong>přitahování dolní čelisti</strong> a stabilizaci skusu.
          </div>

          <ul className="pageList">
            <li>Výrazná aktivita při zatínání.</li>
            <li>Pomáhá „dovést“ čelist do stabilní pozice.</li>
            <li>Často citlivý při stresu a nočním skřípání.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: napětí temporalis bývá časté u bolestí hlavy „od čelisti“ a přetížení TMK.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. masseter (zevní žvýkací sval)</h2>
          <div className="pageBlock">
            <strong>m. masseter</strong> je velmi silný sval na boční straně dolní čelisti.
            Je to „power muscle“ pro <strong>zavření úst</strong> a stisk.
          </div>

          <ul className="pageList">
            <li>Primární funkce: elevace dolní čelisti (zavření).</li>
            <li>Silný při kousání a zatínání.</li>
            <li>Často hmatný a citlivý při bruxismu.</li>
          </ul>

          <div className="pageBlock">
            <img src={imgMasseter} alt="m. masseter – zevní žvýkací sval" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">mm. pterygoidei (vnitřní žvýkací svaly)</h2>
          <div className="pageBlock">
            <strong>mm. pterygoidei</strong> jsou hlubší žvýkací svaly. Prakticky jsou důležité tím,
            že umožňují <strong>posun dolní čelisti dopředu</strong> a <strong>do stran</strong>,
            a tím i třecí pohyby při žvýkání.
          </div>

          <ul className="pageList">
            <li>Posun čelisti dopředu (protrakce).</li>
            <li>Posun do stran (laterální pohyby).</li>
            <li>Třecí pohyby při žvýkání = kombinace do stran + dopředu.</li>
          </ul>

          <div className="pageBlock">
            <img src={imgPterygoidei} alt="mm. pterygoidei – vnitřní žvýkací svaly" className="img" />
          </div>

          <div className="pageSummary">
            Když si klient „nemůže najít skus“ nebo má pocit vychýlené čelisti, často je ve hře nerovnováha právě v hlubších žvýkacích svalech.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Žvýkací svaly pohybují dolní čelistí.</li>
            <li>m. temporalis a m. masseter se podílejí hlavně na zavření úst (elevaci).</li>
            <li>mm. pterygoidei umožňují posun dopředu a do stran – důležité pro tření.</li>
            <li>Přetížení se často projeví zatínáním, skřípáním a bolestí v oblasti čelisti.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: žvýkací svaly</h2>
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
