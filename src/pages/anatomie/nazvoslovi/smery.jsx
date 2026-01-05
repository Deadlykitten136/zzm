import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function Smery() {

    const pool = useMemo(
    () => [
      { q: "nahoru", a: ["kranialni", "kraniální", "superior"] },
      { q: "dolní", a: ["inferior", "kaudalni", "kaudální"] },

      { q: "přední", a: ["anterior", "ventralni", "ventrální"] },
      { q: "zadní", a: ["posterior", "dorzalni", "dorzální"] },

      { q: "ke střední rovině", a: ["medialni", "mediální"] },
      { q: "od střední roviny", a: ["lateralni", "laterální"] },

      { q: "povrchový", a: ["superficialis"] },
      { q: "hluboký", a: ["profundus"] },

      { q: "vnitřní", a: ["interni", "interní"] },
      { q: "zevní", a: ["externi", "externí"] },

      { q: "blíž k trupu", a: ["proximalni", "proximální"] },
      { q: "dál od trupu", a: ["distalni", "distální"] },

      { q: "palcová strana ruky", a: ["radialni", "radiální"] },
      { q: "malíková strana ruky", a: ["ulnarni", "ulnární"] },

      { q: "dlaňová strana", a: ["palmarni", "palmární", "volarni", "volární"] },
      { q: "hřbetní strana ruky", a: ["dorzalni", "dorzální"] },

      { q: "strana palce na noze", a: ["tibialni", "tibiální"] },
      { q: "strana malíku na noze", a: ["fibularni", "fibulární"] },

      { q: "ploska", a: ["plantarni", "plantární"] },
      { q: "hřbet nohy", a: ["dorzalni", "dorzální"] },
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

  const currentIndex = deck[pos];
  const current = pool[currentIndex];

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
      setFeedback({ ok: true, text: "Správně ✅" });
    } else {
      setFeedback({ ok: false, text: `Ne ❌ Správně: ${current.a[0]}` });
    }

    // Automaticky posuň další otázku (krátká pauza, aby šlo přečíst výsledek)
    setTimeout(() => next(), 600);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };


  return (
    <PageLayout
      title="Základní směry a roviny těla"
      lead="Anatomie používá pevně danou základní polohu, roviny a směrové termíny, aby byl popis lidského těla jednoznačný. Tyto pojmy jsou základem pro klinickou praxi i zobrazovací metody."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Základní anatomická poloha</h2>
          <div className="pageBlock">
            Základní anatomická poloha je výchozí poloha, vůči které se popisují všechny směry a
            vztahy struktur.
          </div>

          <ul className="pageList">
            <li>Stoj vzpřímený.</li>
            <li>Horní končetiny volně podél těla.</li>
            <li>Dlaně směřují dopředu (palce laterálně).</li>
            <li>Dolní končetiny jsou u sebe, špičky vpřed.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: Když si nejste jistí „přední/zadní“ nebo „vnitřní/vnější“, vždy si tělo
            nejdřív představte v základní anatomické poloze.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Roviny těla</h2>
          <div className="pageBlock">
            Roviny jsou pomyslné řezy tělem používané pro popis polohy struktur a pro orientaci v
            anatomii i radiologii.
          </div>

          <ul className="pageList">
            <li>
              <strong>Mediánní (střední) rovina</strong> – svislá rovina uprostřed těla; dělí tělo na
              levou a pravou polovinu.
            </li>
            <li>
              <strong>Sagitální (šípová) roviny</strong> – svislé roviny rovnoběžné s mediánní;
              dělí tělo na pravou a levou část.
            </li>
            <li>
              <strong>Frontální (čelní, koronární) rovina</strong> – svislá rovina rovnoběžná s čelem;
              dělí tělo na přední a zadní část.
            </li>
            <li>
              <strong>Transverzální (příčná, axiální) rovina</strong> – vodorovná rovina; dělí tělo
              na horní a dolní část.
            </li>
          </ul>

          <div className="pageSummary">
            V praxi: „koronární“ se často používá jako synonymum pro frontální, „axiální“ pro
            transverzální.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Směry na trupu a hlavě</h2>
          <div className="pageBlock">
            Základní směrové termíny popisují vzájemnou polohu struktur. Některé dvojice jsou
            synonymní a používají se podle kontextu.
          </div>

          <ul className="pageList">
            <li>
              <strong>Kraniální</strong> (k lebce) × <strong>kaudální</strong> (směrem dolů).
            </li>
            <li>
              <strong>Superior</strong> (horní) × <strong>inferior</strong> (dolní).
            </li>
            <li>
              <strong>Anterior</strong> (přední) × <strong>posterior</strong> (zadní).
            </li>
            <li>
              <strong>Ventrální</strong> (břišní, přední) × <strong>dorzální</strong> (zádová, zadní).
            </li>
            <li>
              <strong>Mediální</strong> (ke střední rovině) × <strong>laterální</strong> (od střední
              roviny).
            </li>
            <li>
              <strong>Interní</strong> (vnitřní) × <strong>externí</strong> (zevní).
            </li>
            <li>
              <strong>Superficialis</strong> (povrchový) × <strong>profundus</strong> (hluboký).
            </li>
            <li>
              <strong>Dexter (dx)</strong> – pravý × <strong>sinister (sin)</strong> – levý.
            </li>
          </ul>

          <div className="pageSummary">
            Pozor: „ventrální/dorzální“ se dobře kryje s „anterior/posterior“ na trupu, ale na
            končetinách se častěji používají specifické termíny (palmární/plantární apod.).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Směry na končetinách</h2>
          <div className="pageBlock">
            Na končetinách se pro orientaci používá zejména vztah k trupu (proximálně/distálně) a
            dále pojmy odvozené od kostí předloktí a bérce nebo od ploch ruky a nohy.
          </div>

          <ul className="pageList">
            <li>
              <strong>Proximálně</strong> – blíž k trupu (k místu připojení končetiny).
            </li>
            <li>
              <strong>Distálně</strong> – dál od trupu (směrem k prstům).
            </li>
          </ul>

          <div className="pageSummary">
            Pomůcka: proximální = „u těla“, distální = „dál od těla“.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Horní končetina – specifické směry</h2>
          <div className="pageBlock">
            U horní končetiny se orientujeme podle kostí předloktí: radius je na palcové straně,
            ulna na malíkové.
          </div>

          <ul className="pageList">
            <li>
              <strong>Radiální</strong> – palcová strana × <strong>ulnární</strong> – malíková strana.
            </li>
            <li>
              <strong>Palmární (volární)</strong> – dlaňová strana × <strong>dorzální</strong> –
              hřbetní strana ruky.
            </li>
          </ul>

          <div className="pageSummary">
            „Volární“ se v praxi používá hlavně pro oblast dlaně a přední plochu prstů.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Dolní končetina – specifické směry</h2>
          <div className="pageBlock">
            U dolní končetiny se orientujeme podle bércových kostí: tibia je na straně palce,
            fibula na straně malíku.
          </div>

          <ul className="pageList">
            <li>
              <strong>Tibiální</strong> – vnitřní strana (k palci) × <strong>fibulární</strong> – zevní
              strana (k malíku).
            </li>
            <li>
              <strong>Plantární</strong> – ploska × <strong>dorzální</strong> – hřbetní strana nohy.
            </li>
          </ul>

          <div className="pageSummary">
            U nohy znamená „dorzální“ hřbet nohy (nárt), ne „zadní stranu“ jako na trupu.
          </div>
        </div>

                <div className="card">
          <h2 className="pageH2">Cvičení: anatomické směry</h2>
          <div className="pageBlock">
            Já napíšu směr, vy napíšete odpověď jedním slovem (latinsky). Po odeslání hned dostanete
            výsledek a automaticky se zobrazí další otázka.
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

          {feedback && (
            <div className="pageSummary">
              {feedback.text}
            </div>
          )}
        </div>


        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Vše se popisuje vůči základní anatomické poloze.</li>
            <li>Roviny: mediánní/sagitální (pravá–levá), frontální (přední–zadní), transverzální (horní–dolní).</li>
            <li>Směry na trupu: kraniální/kaudální, superior/inferior, anterior/posterior, mediální/laterální.</li>
            <li>Na končetinách: proximální/distální + radiální/ulnární, tibiální/fibulární, palmární/plantární.</li>
          </ul>

          
        </div>
      </div>
    </PageLayout>
  );
}
