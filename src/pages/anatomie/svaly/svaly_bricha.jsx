import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img1 from "../../../assets/anatomie/svaly-bricha.jpg";
import img2 from "../../../assets/anatomie/brisni_svaly.jpg";

export default function SvalyBricha() {
  const pool = useMemo(
    () => [
      { q: "přímý břišní sval se latinsky řekne (2 slova)", a: ["rectus abdominis"] },
      { q: "zevní šikmý břišní sval se latinsky řekne (3 slova)", a: ["obliquus externus abdominis"] },
      { q: "vnitřní šikmý břišní sval se latinsky řekne (3 slova)", a: ["obliquus internus abdominis"] },
      { q: "nejhlubší břišní sval se latinsky řekne (2 slova)", a: ["transversus abdominis"] },
      { q: "vazivová čára ve střední linii břicha je (2 slova)", a: ["linea alba"] },
      { q: "rozestup přímých břišních svalů se nazývá (1 slovo)", a: ["diastáza", "diastaza"] },
      { q: "břišní svaly jsou důležité pro břišní (1 slovo)", a: ["lis"] },
      { q: "břišní svaly pomáhají hlavně při (1 slovo)", a: ["výdechu", "vydechu"] },
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
      title="Svaly břicha"
      lead="Břišní svaly zajišťují pohyb trupu, stabilitu a břišní lis. Jsou důležité i pro výdech, držení orgánů a spolupráci s bránicí a pánevním dnem."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={img1} alt="Svaly břicha – přehled" className="img" />
            <img src={img2} alt="Svaly břicha – vrstvy" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Základní funkce břišních svalů</h2>
          <div className="pageBlock">
            Břišní svaly jsou víc než „sixpack“. Fungují jako svalová stěna, která řídí pohyb trupu,
            stabilizuje páteř a pomáhá vytvářet tlak v dutině břišní. Díky tomu pomáhají při výdechu,
            kašli, vyprazdňování i při udržení orgánů ve správné poloze.
          </div>

          <ul className="pageList">
            <li>Předklon, úklon a rotace trupu.</li>
            <li>Stabilizace trupu a páteře.</li>
            <li>Břišní lis (tlak v dutině břišní).</li>
            <li>Pomocné dýchací svaly – hlavně při výdechu.</li>
            <li>Udržení polohy orgánů a podpora návratu krve k srdci.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: silné břicho ≠ jen síla. Důležitá je koordinace tlaku (bránice + břicho + pánevní dno).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. rectus abdominis (přímý sval břišní)</h2>
          <div className="pageBlock">
            <strong>m. rectus abdominis</strong> je pár svalových pruhů na přední stěně břicha.
            Pravý a levý sval jsou spojeny ve střední čáře vazivovou strukturou <strong>linea alba</strong>.
            Svalová bříška jsou často opticky oddělená šlašovitými proužky (typické „kostičky“).
          </div>

          <ul className="pageList">
            <li>Funkce: předklon trupu, podíl na břišním lisu, pomoc při výdechu.</li>
            <li>Střední spojení: <strong>linea alba</strong> (vazivo).</li>
            <li>Má pevnou pochvu (vazivo), která zvyšuje stabilitu.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Linea alba a diastáza</h2>
          <div className="pageBlock">
            <strong>Linea alba</strong> je vazivová „bílá čára“ ve střední linii břicha. Je to místo,
            kde se setkávají a proplétají aponeurózy břišních svalů. Když je linea alba přetížená nebo roztažená,
            může vzniknout <strong>diastáza</strong> – rozestup přímých břišních svalů.
          </div>

          <ul className="pageList">
            <li><strong>Diastáza</strong> = rozestup pravého a levého rectus abdominis.</li>
            <li>Nejde primárně o „díru ve svalu“, ale o oslabení/roztažení vaziva.</li>
            <li>Funkčně: horší přenos síly, slabší stabilita, „břicho jde ven“ při tlaku.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: když se zvedne tlak v břiše a střed „povolí“, tělo často kompenzuje napětím beder a hrudníku.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. obliquus externus abdominis (zevní šikmý)</h2>
          <div className="pageBlock">
            <strong>Zevní šikmý sval</strong> je povrchově na stranách břicha. Je důležitý pro rotace a úklony.
            Směr vláken se často popisuje pomůckou: „<strong>ruce do kapes</strong>“ (shora dolů a vpřed).
          </div>

          <ul className="pageList">
            <li>Oboustranně: spolupracuje na předklonu a břišním lisu.</li>
            <li>Jednostranně: rotace na opačnou stranu + úklon na svou stranu.</li>
            <li>Směr vláken: „ruce do kapes“.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">m. obliquus internus abdominis (vnitřní šikmý)</h2>
          <div className="pageBlock">
            <strong>Vnitřní šikmý sval</strong> leží pod zevním šikmým. Má podobné funkce, ale u rotace pracuje
            „zrcadlově“ – při jednostranné aktivitě rotuje trup na <strong>svou stranu</strong>.
            Směr vláken je přibližně kolmo na zevní šikmý sval.
          </div>

          <ul className="pageList">
            <li>Oboustranně: předklon + břišní lis.</li>
            <li>Jednostranně: rotace na svou stranu + úklon na svou stranu.</li>
            <li>Vazba na thorakolumbální fascii (důležité pro stabilitu beder).</li>
          </ul>

          <div className="pageSummary">
            Zevní a vnitřní šikmé svaly spolu vytvářejí „opasek“ pro rotaci a stabilitu trupu.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. transversus abdominis (příčný břišní)</h2>
          <div className="pageBlock">
            <strong>m. transversus abdominis</strong> je nejhlubší břišní sval. Nejde primárně o velký pohyb,
            ale o <strong>stabilizaci</strong> a kontrolu tlaku v břiše. Funguje jako „korzet“.
            Důležitý je pro břišní lis, výdech a stabilitu beder.
          </div>

          <ul className="pageList">
            <li>Nejhlubší břišní sval.</li>
            <li>Stabilizace trupu a páteře.</li>
            <li>Kontrola tlaku v dutině břišní (břišní lis).</li>
            <li>Pomáhá při výdechu.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: u diastázy a bolestí beder je často klíčové právě zapojení transversu (ne „víc sedů-lehů“).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. quadratus lumborum (čtyřhranný sval bederní)</h2>
          <div className="pageBlock">
            <strong>m. quadratus lumborum</strong> je hlubší sval v oblasti beder. Spojuje pánev a 12. žebro
            a bývá důležitý pro stabilitu a úklony trupu. Zároveň může fixovat 12. žebro a tím ovlivnit práci bránice.
          </div>

          <ul className="pageList">
            <li>Oboustranně: záklon bederní páteře.</li>
            <li>Jednostranně: úklon na svou stranu.</li>
            <li>Fixace 12. žebra (vztah k bránici).</li>
          </ul>

          <div className="pageSummary">
            QL bývá přetížený při jednostranné zátěži a „padání“ do jedné nohy – často bolí bok a bedra.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Břišní svaly zajišťují pohyb trupu, stabilitu a břišní lis.</li>
            <li>Rectus abdominis je spojen přes <strong>linea alba</strong>.</li>
            <li><strong>Diastáza</strong> je rozestup přímých břišních svalů kvůli oslabení linea alba.</li>
            <li>Šikmé svaly jsou klíčové pro rotaci a úklon.</li>
            <li>Transversus abdominis je nejhlubší stabilizační „korzet“.</li>
            <li>Quadratus lumborum souvisí s úklony a stabilitou beder i 12. žebra.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly břicha</h2>
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
