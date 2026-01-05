import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgHrudnikSvaly from "../../../assets/anatomie/hrudnik_svaly.jpg";

export default function SvalyHrudnikuKoncetinove() {
  const pool = useMemo(
    () => [
      { q: "velký prsní sval se latinsky řekne (2 slova)", a: ["pectoralis major"] },
      { q: "malý prsní sval se latinsky řekne (2 slova)", a: ["pectoralis minor"] },
      { q: "přední pilovitý sval se latinsky řekne (2 slova)", a: ["serratus anterior"] },
      { q: "serratus anterior je důležitý pro stabilizaci (1 slovo)", a: ["lopatky", "lopatka"] },
      { q: "subclavius souvisí s kostí (1 slovo)", a: ["klíční", "klíčníkost", "klíční kost", "clavicula"] },
      { q: "pectoralis major působí v rameni hlavně jako (1 slovo)", a: ["adduktor", "addukce", "pritažení", "přitažení"] },
      { q: "pectoralis minor táhne lopatku spíš (1 slovo)", a: ["dopředu", "dopredu"] },
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
      title="Svaly hrudníku – končetinové v oblasti hrudníku"
      lead="Tyto svaly propojují hrudník s horní končetinou. Ovlivňují pohyb v rameni, stabilitu lopatky a nepřímo i dech (přes postavení hrudníku a ramen)."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgHrudnikSvaly} alt="Svaly hrudníku v oblasti horní končetiny – přehled" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Proč jsou prakticky důležité</h2>
          <div className="pageBlock">
            Svaly hrudníku spojené s horní končetinou často rozhodují o tom, jak „sedí“ ramena a lopatky.
            Když jsou zkrácené nebo přetížené, ramena jdou dopředu, hrudník se „zavře“ a pak se přetěžuje krk
            i horní záda. To je důležité i pro práci s dechem a posturou.
          </div>

          <ul className="pageList">
            <li>Ovlivňují rameno i lopatku (postavení ramen).</li>
            <li>Postavení ramen ovlivňuje hrudník a dechový vzor.</li>
            <li>Často přetížené při sedavé práci a stresu.</li>
          </ul>

          <div className="pageSummary">
            Jednoduše: „zavřený hrudník“ = často zkrácené prsní svaly a oslabená stabilizace lopatky.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. pectoralis major (velký prsní sval)</h2>
          <div className="pageBlock">
            <strong>m. pectoralis major</strong> je velký povrchový sval hrudníku. Hlavně přitahuje paži k trupu
            a podílí se na vnitřní rotaci. Je velmi aktivní při „tlačných“ pohybech (např. kliky).
          </div>

          <ul className="pageList">
            <li>V rameni: přitažení (addukce), předpažení a vnitřní rotace.</li>
            <li>Při fixované paži může pomáhat i při nádechu (pomocný dýchací sval).</li>
            <li>Často zkrácený → ramena dopředu.</li>
          </ul>

          <div className="pageSummary">
            Pokud je pectoralis major zkrácený, omezuje otevření hrudníku a volnost ramene.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. pectoralis minor (malý prsní sval)</h2>
          <div className="pageBlock">
            <strong>m. pectoralis minor</strong> je hlubší než pectoralis major a jeho hlavní vliv je na lopatku.
            Táhne lopatku dopředu a dolů – proto může výrazně ovlivnit „kulatá ramena“.
          </div>

          <ul className="pageList">
            <li>Ovlivňuje lopatku (posun dopředu a dolů).</li>
            <li>Podílí se na stabilizaci ramenního pletence.</li>
            <li>Při zkrácení: ramena dopředu, hrudník „zavřený“.</li>
          </ul>

          <div className="pageSummary">
            U pectoralis minor je často problém „lopatka není tam, kde má být“ – a rameno pak bolí i bez zjevné příčiny.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. subclavius</h2>
          <div className="pageBlock">
            <strong>m. subclavius</strong> je malý sval pod klíční kostí. Základní funkce je stabilizace
            oblasti klíční kosti a ramenního pletence.
          </div>

          <ul className="pageList">
            <li>Souvisí s klíční kostí (clavicula).</li>
            <li>Stabilizuje spojení v oblasti ramenního pletence.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">m. serratus anterior (přední pilovitý sval)</h2>
          <div className="pageBlock">
            <strong>m. serratus anterior</strong> je klíčový sval pro stabilitu lopatky. Udržuje lopatku „přilepenou“
            k hrudníku a umožňuje její plynulý pohyb při zvedání paže. Bez něj je lopatka nestabilní.
          </div>

          <ul className="pageList">
            <li>Stabilizuje lopatku na hrudníku.</li>
            <li>Pomáhá při pohybu lopatky dopředu (protrakce).</li>
            <li>Důležitý pro zvedání paže nad hlavu (spolupráce lopatky).</li>
          </ul>

          <div className="pageSummary">
            Prakticky: slabý serratus anterior → lopatka „odstává“ (nestabilita), rameno je přetížené.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Pectoralis major působí hlavně v rameni (addukce, vnitřní rotace).</li>
            <li>Pectoralis minor ovlivňuje lopatku (tah dopředu a dolů).</li>
            <li>Subclavius stabilizuje oblast klíční kosti.</li>
            <li>Serratus anterior stabilizuje lopatku na hrudníku.</li>
            <li>Postavení ramen ovlivňuje držení těla i dechový vzor.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly hrudníku (končetinové)</h2>
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
