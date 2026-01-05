import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgLong from "../../../assets/anatomie/stavba_dlouhe_kosti.jpg";
import imgTypes from "../../../assets/anatomie/typy_kosti.jpg";

export default function DeleniDleTvaru() {
  const pool = useMemo(
    () => [
      { q: "kostí s převahou délky nad šířkou a tloušťkou", a: ["dlouhe", "dlouhé"] },
      { q: "kostí přibližně stejné délky, šířky a tloušťky", a: ["kratke", "krátké"] },
      { q: "kostí s převahou plochy nad tloušťkou", a: ["ploce", "ploché"] },
      { q: "kostí nepravidelného tvaru", a: ["nepravidelne", "nepravidelné"] },
      { q: "kostí obsahujících dutiny vyplněné vzduchem", a: ["pneumaticke", "pneumatické"] },
      { q: "kostí vznikajících v šlaše (typicky zvyšují účinnost svalu)", a: ["sezamske", "sezamské"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

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
      title="Dělení kostí podle tvaru"
      lead="Kosti se podle tvaru dělí do několika skupin. Toto dělení pomáhá rychle odhadnout jejich typickou stavbu a hlavní funkci."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Princip dělení podle tvaru</h2>
          <div className="pageBlock">
            Rozdělení podle tvaru vychází z poměru délky, šířky a tloušťky kosti a z přítomnosti
            specifických znaků (např. dutiny vyplněné vzduchem nebo vznik v šlaše). V praxi se
            toto dělení používá pro orientaci ve stavbě, zatížení a funkci kosti.
          </div>

          <ul className="pageList">
            <li>Tvar často souvisí s typem mechanického namáhání.</li>
            <li>Různé typy kostí mají typicky odlišný poměr kompakty a spongiózy.</li>
            <li>Některé skupiny jsou definované zvláštním znakem (pneumatické, sezamské).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Dlouhé kosti (ossa longa)</h2>
          <div className="pageBlock">
            Dlouhé kosti mají převahu délky nad šířkou a tloušťkou. Typicky fungují jako páky pro
            pohyb a nesou zátěž.
          </div>

          <ul className="pageList">
            <li>Typická je diafýza a epifýzy.</li>
            <li>V diafýze převažuje kompaktа; v epifýzách spongióza.</li>
            <li>Příklady: femur, humerus, tibia, radius.</li>
          </ul>

          <div className="pageSummary">
            Dlouhé kosti nejsou „jen“ dlouhé – jsou charakteristické i typickou vnitřní stavbou a funkcí páky.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Krátké kosti (ossa brevia)</h2>
          <div className="pageBlock">
            Krátké kosti mají přibližně stejné rozměry ve všech směrech. Umožňují jemné, stabilní
            pohyby a rozkládají tlak.
          </div>

          <ul className="pageList">
            <li>Často převažuje spongióza obalená tenkou kompaktou.</li>
            <li>Příklady: kosti zápěstní (ossa carpi), kosti zánártní (ossa tarsi).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Ploché kosti (ossa plana)</h2>
          <div className="pageBlock">
            Ploché kosti mají převahu plochy nad tloušťkou. Typicky chrání orgány a poskytují velkou
            plochu pro úpony svalů.
          </div>

          <ul className="pageList">
            <li>Často mají dvě vrstvy kompakty a mezi nimi spongiózu.</li>
            <li>Příklady: sternum, lopatka (scapula), kosti klenby lební.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Nepravidelné kosti (ossa irregularia)</h2>
          <div className="pageBlock">
            Nepravidelné kosti nemají jednoduchý geometrický tvar. Kombinují více funkcí (opora,
            ochrana, úpony svalů) a jejich tvar odpovídá specifickým nárokům dané oblasti.
          </div>

          <ul className="pageList">
            <li>Příklady: obratle, některé kosti spodiny lební.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Pneumatické kosti (ossa pneumatica)</h2>
          <div className="pageBlock">
            Pneumatické kosti obsahují dutiny vyplněné vzduchem (pneumatizované prostory), které
            jsou vystlané sliznicí a komunikují s dutinami dýchacími.
          </div>

          <ul className="pageList">
            <li>Funkčně snižují hmotnost kosti při zachování pevnosti.</li>
            <li>Příklady: čelní kost (sinus frontalis), horní čelist (sinus maxillaris).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Sezamské kosti (ossa sesamoidea)</h2>
          <div className="pageBlock">
            Sezamské kosti vznikají v šlaše v místě zvýšeného tření a tlaku. Mění směr tahu šlachy
            a zvyšují mechanickou účinnost svalu.
          </div>

          <ul className="pageList">
            <li>Největší sezamskou kostí je čéška (patella).</li>
            <li>Menší sezamské kosti se mohou vyskytovat i u prstů.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Obrázky</h2>
          <div className="pageBlock">
            <img src={imgLong} alt="Stavba dlouhé kosti" className="img" />
          </div>
          <div className="pageBlock">
            <img src={imgTypes} alt="Typy kostí podle tvaru" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Dlouhé kosti: páky pro pohyb, typicky diafýza + epifýzy.</li>
            <li>Krátké kosti: stabilita a jemné pohyby, často zápěstí a zánártí.</li>
            <li>Ploché kosti: ochrana a velká plocha pro úpony svalů.</li>
            <li>Nepravidelné kosti: specifický tvar podle funkce (např. obratle).</li>
            <li>Pneumatické kosti: vzdušné dutiny, menší hmotnost.</li>
            <li>Sezamské kosti: v šlachách, snižují tření a zvyšují účinnost.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: dělení kostí podle tvaru</h2>
          <div className="pageBlock">
            Já napíšu popis, vy napíšete typ kosti jedním slovem (např. dlouhé/krátké/ploché…).
          </div>

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

        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Jaké skupiny kostí rozlišujeme podle tvaru?</li>
            <li>Jak poznáte dlouhou kost a jaká je její typická funkce?</li>
            <li>Uveďte příklad krátké kosti a vysvětlete její typickou roli.</li>
            <li>Proč jsou ploché kosti vhodné pro ochranu orgánů?</li>
            <li>Co znamená, že je kost pneumatická, a jaký to má význam?</li>
            <li>Co je sezamská kost a jak ovlivňuje tah šlachy?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
