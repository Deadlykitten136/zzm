import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgUpon from "../../../assets/anatomie/upon.jpg";

export default function PripojeniSvalu() {
  const pool = useMemo(
    () => [
      { q: "šlacha se latinsky řekne", a: ["tendo", "tendomusculi", "tendomusculi"] },
      { q: "šlacha připojuje sval ke (1 slovo)", a: ["kosti"] },
      { q: "aponeuróza je jaký typ šlachy (1 slovo)", a: ["plocha", "plochá"] },
      { q: "vaz se latinsky řekne", a: ["ligamentum"] },
      { q: "vaz typicky spojuje (1 slovo)", a: ["kost", "kosti"] },
      { q: "šlacha je tvořena jakým vazivem (1 slovo)", a: ["tuhym", "tuhým", "fibrózním", "fibroznim", "fibrozním"] },
      { q: "obal šlachy může být někdy společný pro více (1 slovo)", a: ["slach", "šlach"] },
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
      title="Připojení svalu: šlacha, aponeuróza, vaz"
      lead="Sval se ke kostře připojuje nejčastěji šlachou. V praxi je důležité umět odlišit šlachu, aponeurózu a vaz – i když na první pohled vypadají podobně."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgUpon} alt="Připojení svalu ke kosti – šlacha a aponeuróza" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Šlacha (tendo musculi)</h2>
          <div className="pageBlock">
            Šlacha (tendo musculi) je uspořádaný pruh tuhého fibrózního vaziva. Přenáší sílu svalu na kost,
            takže umožňuje pohyb v kloubu nebo stabilizaci segmentu.
          </div>

          <ul className="pageList">
            <li>Je tvořena tuhým fibrózním vazivem.</li>
            <li>Má obal; někdy může být obal společný pro více šlach.</li>
            <li>Hlavní funkce: připojit sval ke kosti a přenést tah.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: šlacha je často „pevnější a užší“ než svalové bříško a bývá dobře hmatná v typických místech (např. Achillova šlacha).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Aponeuróza</h2>
          <div className="pageBlock">
            Aponeuróza je tuhá plochá šlacha – široká vazivová ploténka. Slouží k přenosu síly svalu na větší
            plochu a bývá typická tam, kde se sval upíná „široce“, ne do jednoho provazce.
          </div>

          <ul className="pageList">
            <li>Je to široká, plochá forma šlachy.</li>
            <li>Rozkládá tah svalu na větší oblast.</li>
            <li>Často se v ní upíná více svalových snopců.</li>
          </ul>

          <div className="pageSummary">
            Zapamatuj si: šlacha = „provaz“, aponeuróza = „placka“. Obě spojují sval s kostí (ne kost s kostí).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Vaz (ligamentum)</h2>
          <div className="pageBlock">
            Vaz (ligamentum) je také vazivová struktura, ale jeho úkol je jiný: stabilizuje kloub nebo
            spojení tím, že typicky spojuje kost s kostí. Vazy pomáhají omezovat nežádoucí pohyby.
          </div>

          <ul className="pageList">
            <li>Latinsky ligamentum.</li>
            <li>Typicky spojuje kost s kostí.</li>
            <li>Stabilizuje a „hlídá“ rozsah pohybu v kloubu.</li>
          </ul>

          <div className="pageSummary">
            Rozdíl do praxe: když je problém v tahu svalu → často šlacha/aponeuróza. Když je problém ve stabilitě kloubu → často vaz.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li><strong>Šlacha (tendo)</strong> spojuje sval s kostí a přenáší tah.</li>
            <li><strong>Aponeuróza</strong> je široká plochá šlacha.</li>
            <li><strong>Vaz (ligamentum)</strong> typicky spojuje kost s kostí a stabilizuje kloub.</li>
            <li>Šlacha může mít obal, někdy společný pro více šlach.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: připojení svalu</h2>
          <div className="pageBlock">
            <strong>Otázka:</strong> {current?.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napište odpověď (1 slovo)"
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
