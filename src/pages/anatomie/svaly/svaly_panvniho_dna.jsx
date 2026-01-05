import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img from "../../../assets/anatomie/panevni_dno.avif";

export default function SvalyPanvnihoDna() {
  const pool = useMemo(
    () => [
      { q: "hlavní svalová ploténka pánevního dna se nazývá (2 slova)", a: ["diaphragma pelvis"] },
      { q: "pánevní dno funguje jako pružná (1 slovo)", a: ["spodina"] },
      { q: "pánevní dno pomáhá udržet orgány v (1 slovo)", a: ["pánvi", "panvi"] },
      { q: "pánevní dno se podílí na udržení (1 slovo)", a: ["kontinence"] },
      { q: "pánevní dno spolupracuje s bránicí při (1 slovo)", a: ["dechu", "dýchání", "dychani"] },
      { q: "pánevní dno je důležité pro stabilitu (1 slovo)", a: ["trupu"] },
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

  const next = () => {
    setFeedback(null);
    setInput("");
    if (pos + 1 >= deck.length) {
      const idx = pool.map((_, i) => i);
      for (let i = idx.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [idx[i], idx[j]] = [idx[j], idx[i]];
      }
      setDeck(idx);
      setPos(0);
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
      title="Svaly dna pánevního"
      lead="Pánevní dno tvoří pružnou svalovou spodinu pánve. Podílí se na stabilitě trupu, dechu, kontinenci i správné poloze orgánů."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek – pánevní dno</h2>
          <div className="pageBlock">
            <img src={img} alt="Svaly pánevního dna – pohled zdola" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Diaphragma pelvis</h2>
          <div className="pageBlock">
            <strong>Diaphragma pelvis</strong> je svalová ploténka, která uzavírá pánev zespodu.
            Tvoří ji především <strong>zdvihač anu</strong> a <strong>kostrční sval</strong>.
            Funkčně se chová jako pružná síť, která nese váhu orgánů a reaguje na tlak shora.
          </div>

          <ul className="pageList">
            <li>Uzavírá pánev zespodu.</li>
            <li>Tvoří pružnou svalovou ploténku.</li>
            <li>Reaguje na změny tlaku v dutině břišní.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Hlavní funkce pánevního dna</h2>
          <div className="pageBlock">
            Pánevní dno není „jen“ o kontinenci. Je součástí stabilizačního systému těla
            a spolupracuje s bránicí, břišní stěnou a hlubokými svaly trupu.
          </div>

          <ul className="pageList">
            <li>Udržuje správnou polohu orgánů v pánvi.</li>
            <li>Podílí se na kontinenci (moč, stolice).</li>
            <li>Spolupracuje při vyprazdňování.</li>
            <li>Stabilizuje trup a pánev.</li>
          </ul>

          <div className="pageSummary">
            Dá se říct, že pánevní dno je „základna“ celé postury – když nefunguje, problém se projeví výš.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Pánevní dno a dech</h2>
          <div className="pageBlock">
            Pánevní dno úzce spolupracuje s <strong>bránicí</strong>.
            Při nádechu bránice klesá a zvyšuje tlak směrem dolů – pánevní dno musí pružně reagovat.
            Při výdechu se tlak snižuje a pánevní dno se může aktivně zvedat.
          </div>

          <ul className="pageList">
            <li>Při nádechu reaguje na tlak shora.</li>
            <li>Při výdechu se může aktivně zapojit.</li>
            <li>Spolupráce je klíčová pro stabilitu i kontinenci.</li>
          </ul>

          <div className="pageSummary">
            Pokud dech a pánevní dno „nejdou spolu“, často se objeví potíže v bedrech, břiše nebo pánvi.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Význam pro praxi</h2>
          <div className="pageBlock">
            Pro terapeutickou práci je důležité vnímat pánevní dno ne izolovaně,
            ale jako součást celého tlakového a stabilizačního systému těla.
            Problém se často neřeší posilováním, ale koordinací a uvolněním.
          </div>

          <ul className="pageList">
            <li>Není to jen „sval na stažení“.</li>
            <li>Důležitá je pružnost a koordinace.</li>
            <li>Souvisí s dechem, posturou a psychickým napětím.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Diaphragma pelvis tvoří svalovou spodinu pánve.</li>
            <li>Udržuje orgány, kontinenci a stabilitu.</li>
            <li>Úzce spolupracuje s bránicí.</li>
            <li>Je klíčové pro posturu i dech.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly pánevního dna</h2>
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
