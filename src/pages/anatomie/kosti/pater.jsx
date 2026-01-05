import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgAtlas from "../../../assets/anatomie/atlas_nosic.jpg";
import imgCompare from "../../../assets/anatomie/porovnani_obratle.jpeg";
import imgCurves from "../../../assets/anatomie/lordosa_kyfosa.png";

export default function Pater() {
  const pool = useMemo(
    () => [
      { q: "jak se latinsky řekne obratel", a: ["vertebra"] },
      { q: "kolik je krčních obratlů", a: ["7", "sedm"] },
      { q: "kolik je hrudních obratlů", a: ["12", "dvanact", "dvanáct"] },
      { q: "kolik je bederních obratlů", a: ["5", "pet", "pět"] },
      { q: "jak se nazývá fyziologické zakřivení krční páteře", a: ["lordoza", "lordosa"] },
      { q: "jak se nazývá fyziologické zakřivení hrudní páteře", a: ["kyfoza", "kyfosa"] },
      { q: "patologické zakřivení páteře do strany", a: ["skolioza", "skolióza"] },
      { q: "nejlépe hmatný krční obratel", a: ["c7", "vertebraprominens"] },
      { q: "obratel, který umožňuje kývání hlavy (ano)", a: ["atlas"] },
      { q: "obratel umožňující rotaci hlavy (ne)", a: ["axis"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const [deck, setDeck] = useState(() =>
    [...pool.keys()].sort(() => Math.random() - 0.5)
  );
  const [pos, setPos] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const current = pool[deck[pos]];

  const next = () => {
    setInput("");
    setFeedback(null);
    if (pos + 1 >= deck.length) {
      setDeck([...pool.keys()].sort(() => Math.random() - 0.5));
      setPos(0);
    } else {
      setPos((p) => p + 1);
    }
  };

  const check = () => {
    const ok = current.a.map(normalize).includes(normalize(input));
    setFeedback(ok ? "Správně ✅" : `Ne ❌ Správně: ${current.a[0]}`);
    setTimeout(next, 600);
  };

  return (
    <PageLayout
      title="Páteř"
      lead="Páteř tvoří osovou oporu těla, chrání míchu a umožňuje pohyb i pružnost trupu. Zároveň je důležitým orientačním systémem v klinice i v TČM."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Základní stavba obratle</h2>
          <div className="pageBlock">
            Základní stavební jednotkou páteře je obratel (vertebra). Jednotlivé obratle se liší
            tvarem podle funkce, ale mají společnou základní stavbu.
          </div>
          <ul className="pageList">
            <li><strong>Tělo obratle</strong> – nese hmotnost.</li>
            <li><strong>Obratlový oblouk</strong> – ohraničuje páteřní kanál.</li>
            <li><strong>Výběžky</strong> – trnový, příčné a kloubní (úpony svalů, spojení obratlů).</li>
            <li><strong>Páteřní kanál</strong> – prostor pro míchu.</li>
          </ul>
        </div>

        <div className="card">
          <img src={imgCompare} alt="Porovnání obratlů" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Oddíly páteře</h2>
          <ul className="pageList">
            <li><strong>Krční páteř</strong> (C1–C7) – velká pohyblivost, nese hlavu.</li>
            <li><strong>Hrudní páteř</strong> (Th1–Th12) – spojení s žebry, menší pohyblivost.</li>
            <li><strong>Bederní páteř</strong> (L1–L5) – nese největší zátěž.</li>
            <li><strong>Křížová kost</strong> (S1–S5) – srůst obratlů.</li>
            <li><strong>Kostrč</strong> – rudimentární zbytek páteře.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Specifické krční obratle</h2>
          <ul className="pageList">
            <li><strong>C1 – nosič (atlas)</strong> – umožňuje kývání hlavy.</li>
            <li><strong>C2 – čepovec (axis)</strong> – umožňuje rotaci hlavy.</li>
            <li><strong>C7 – vertebra prominens</strong> – nejlépe hmatný obratel.</li>
          </ul>
        </div>

        <div className="card">
          <img src={imgAtlas} alt="Atlas a čepovec" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Fyziologická zakřivení páteře</h2>
          <div className="pageBlock">
            V sagitální rovině má páteř přirozená zakřivení, která zvyšují pružnost a schopnost
            tlumit nárazy. Ve frontální rovině je páteř za normálních okolností přímá.
          </div>
          <ul className="pageList">
            <li><strong>Lordóza</strong> – krční a bederní.</li>
            <li><strong>Kyfóza</strong> – hrudní a křížová.</li>
            <li>Střídání zakřivení zvyšuje odolnost vůči zatížení.</li>
          </ul>
        </div>

        <div className="card">
          <img src={imgCurves} alt="Lordóza a kyfóza" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Patologická zakřivení</h2>
          <ul className="pageList">
            <li><strong>Skolióza</strong> – vychýlení páteře do strany.</li>
            <li><strong>Rotoskolióza</strong> – skolióza spojená s rotací obratlů.</li>
            <li><strong>Hyperlordóza / hyperkyfóza</strong> – zvýraznění zakřivení.</li>
            <li><strong>Vymizelá křivka</strong> – zploštění fyziologického zakřivení.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Palpační orientace (TČM praxe)</h2>
          <ul className="pageList">
            <li><strong>C7</strong> – vertebra prominens, výrazně vystupuje při flexi krku.</li>
            <li><strong>C6</strong> – při rotaci „zajíždí“, C7 zůstává hmatná.</li>
            <li><strong>Th1</strong> – už se při rotaci nehýbe.</li>
            <li><strong>Dolní úhel lopatky</strong> ukazuje přibližně na <strong>Th7</strong>.</li>
            <li><strong>Pupík</strong> leží přibližně proti <strong>L2</strong>.</li>
            <li><strong>L5</strong> – v oblasti trojúhelníku mezi pánevními „ďolíčky“.</li>
            <li>Konec žeber pomáhá orientaci v přechodu Th–L.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Obratel = vertebra, základní jednotka páteře.</li>
            <li>Páteř má 5 oddílů s různou funkcí.</li>
            <li>Fyziologická zakřivení zajišťují pružnost.</li>
            <li>Palpace páteře je klíčová pro kliniku i TČM.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: páteř</h2>
          <div className="pageBlock"><strong>Otázka:</strong> {current.q}</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) check();
            }}
          >
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napiš odpověď"
            />
            <button type="submit">Odeslat</button>
          </form>
          {feedback && <div className="pageSummary">{feedback}</div>}
        </div>

        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Jaké jsou základní části obratle?</li>
            <li>Jaké oddíly páteře rozlišujeme a kolik mají obratlů?</li>
            <li>Proč se střídá lordóza a kyfóza?</li>
            <li>Jaký je rozdíl mezi skoliózou a rotoskoliózou?</li>
            <li>Jak hmatně odlišíme C6 a C7?</li>
            <li>Jaké orientační body používáme pro Th7, L2 a L5?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
