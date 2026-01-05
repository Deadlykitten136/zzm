import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function LebkaPopis() {
  const pool = useMemo(
  () => [
    { q: "jak se nazývá kostra hlavy", a: ["cranium"] },

    { q: "která část lebky chrání mozek", a: ["neurokranium"] },
    { q: "která část lebky tvoří skelet obličeje", a: ["splanchnokranium"] },

    { q: "jak se nazývá klenba lební", a: ["calva"] },
    { q: "jak se nazývá spodina lební", a: ["basis"] },

    { q: "kolik jamek má spodina lební", a: ["3", "tri", "tři"] },

    { q: "jak se nazývá prostor pro oko", a: ["orbita"] },
    { q: "jak se nazývají zadní otvory dutiny nosní", a: ["choany", "choanae"] },

    { q: "jak se nazývá velký otvor v lebce pro míchu", a: ["foramenmagnum"] },

    {
      q: "co lebka chrání kromě mozku (1 slovo)",
      a: ["smysly", "smyslove", "smyslové"],
    },

    {
      q: "jaké tři hlavní prostory lebka vytváří (stačí jeden)",
      a: ["orbita", "nosni", "nosní", "jame", "jámy"],
    },

    {
      q: "jaký je hlavní funkční rozdíl mezi neurokraniem a splanchnokraniem (1 slovo)",
      a: ["ochrana", "oblicej", "obličej"],
    },
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
      title="Lebka – popis slovem"
      lead="Lebka (cranium) tvoří pevný skelet hlavy. Dělí se na mozkovou část (neurokranium) a obličejovou část (splanchnokranium) a obsahuje důležité prostory pro mozek, smysly i začátek trávicího a dýchacího traktu."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Základní členění lebky</h2>
          <div className="pageBlock">
            Lebku rozlišujeme na dvě hlavní části: mozkovou (chrání mozek a souvisí se smyslovými orgány) a
            obličejovou (tvoří skelet obličeje a obklopuje začátek trávicího traktu).
          </div>

          <ul className="pageList">
            <li>
              <strong>Neurokranium</strong> – mozková část lebky, obklopuje mozek a souvisí se smysly.
            </li>
            <li>
              <strong>Splanchnokranium</strong> – obličejová část lebky, podílí se na stavbě obličeje a dutin.
            </li>
          </ul>

          <div className="pageSummary">
            Poznámka k terminologii ve skriptech: kosti slzní (os lacrimale) a nosní (os nasale) bývají běžně
            řazené do obličejové části (splanchnokranium), ve skriptech jsou uvedeny u neurokrania – pro učení
            je důležité znát je, ale zařazení berte jako orientační podle anatomických učebnic.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Neurokranium – mozková část lebky</h2>
          <div className="pageBlock">
            Neurokranium tvoří kostěný obal mozku. Zahrnuje klenbu a spodinu lební a nese otvory pro průchod
            cév a nervů (např. velký otvor v týlní kosti).
          </div>

          <ul className="pageList">
            <li>
              <strong>Os frontale</strong> – kost čelní.
            </li>
            <li>
              <strong>Os temporale</strong> – kost spánková (má mj. processus mastoideus, processus zygomaticus,
              zevní zvukovod).
            </li>
            <li>
              <strong>Os occipitale</strong> – kost týlní (obsahuje <strong>foramen magnum</strong>).
            </li>
            <li>
              <strong>Os sphenoidale</strong> – kost klínová.
            </li>
            <li>
              <strong>Os parietale</strong> – kost temenní (tuber parietale).
            </li>
            <li>
              <strong>Os ethmoidale</strong> – kost čichová (čichový labyrint).
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Splanchnokranium – obličejová část lebky</h2>
          <div className="pageBlock">
            Splanchnokranium tvoří kostěný základ obličeje. Podílí se na ohraničení dutiny ústní, nosní a očnic
            a vytváří úpony pro žvýkací a mimické svaly.
          </div>

          <ul className="pageList">
            <li>
              <strong>Maxilla</strong> – horní čelist (podílí se na okraji očnice).
            </li>
            <li>
              <strong>Mandibula</strong> – dolní čelist (typický je úhel dolní čelisti).
            </li>
            <li>
              <strong>Os zygomaticum</strong> – kost lícní (tvoří lícní oblouk spolu s výběžkem kosti spánkové).
            </li>
            <li>
              <strong>Os palatinum</strong> – kost patrová.
            </li>
            <li>
              <strong>Os hyoideum</strong> – jazylka.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Části lebky a její prostory</h2>
          <div className="pageBlock">
            Lebku popisujeme nejen podle kostí, ale i podle částí a prostorů, které vytváří. U mozkové části se
            zdůrazňuje spodina a klenba; u obličejové části pak očnice, nosní dutina a vedlejší dutiny nosní.
          </div>

          <ul className="pageList">
            <li>
              <strong>Spodina lebeční (basis cranii)</strong> – tvoří podklad pro mozek; rozlišuje se{" "}
              <strong>přední, střední a zadní jáma lební</strong>.
            </li>
            <li>
              <strong>Klenba lební (calva)</strong> – část „střechy“ lebky: <strong>frons</strong> (čelo),{" "}
              <strong>vertex</strong> (vrchol), <strong>occiput</strong> (záhlaví).
            </li>
            <li>
              <strong>Orbita</strong> – očnice.
            </li>
            <li>
              <strong>Dutina nosní</strong> – vchod je ohraničen mj. maxillou a nosními kostmi; vede k{" "}
              <strong>choanám</strong> (zadní otvory). Nosní přepážku tvoří <strong>vomer</strong> a část kosti čichové.
            </li>
            <li>
              <strong>Vedlejší dutiny nosní</strong> – jsou vždy v příslušné kosti:{" "}
              <strong>čelní</strong>, <strong>čichové</strong> (přední i zadní), <strong>klínové</strong>,{" "}
              <strong>čelistní</strong>.
            </li>
          </ul>

          <div className="pageSummary">
            Praktická pomůcka: „prostory lebky“ = místa, která lebka ohraničuje (jámy lební pro mozek, očnice,
            nosní dutina, dutiny v kostech). U zkoušení se často ptají právě na toto členění, ne jen na výčet kostí.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Lebka (cranium) = neurokranium + splanchnokranium.</li>
            <li>Neurokranium: obal mozku (klenba calva, spodina basis cranii).</li>
            <li>Basis cranii: přední, střední, zadní jáma lební.</li>
            <li>Splanchnokranium: skelet obličeje, ohraničení očnice a dutin.</li>
            <li>Prostory: orbita, dutina nosní (choany, septum), vedlejší dutiny nosní v příslušných kostech.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: lebka</h2>
          <div className="pageBlock">
            Já napíšu otázku, vy napíšete odpověď jedním slovem (nebo stručným tvarem bez mezer).
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
            <li>Jak se lebka dělí na dvě hlavní části a co každá z nich obklopuje?</li>
            <li>Které kosti patří do neurokrania podle skript a které sem typicky řadí anatomie?</li>
            <li>Co je basis cranii a jaké tři jámy lební rozlišujeme?</li>
            <li>Co je calva a jaké části na ní pojmenováváme (frons, vertex, occiput)?</li>
            <li>Co je orbita a které části lebky se na ní podílejí?</li>
            <li>Co jsou choany a z čeho se skládá nosní přepážka?</li>
            <li>Vyjmenujte vedlejší dutiny nosní uvedené ve skriptech.</li>
            <li>Co je foramen magnum a v které kosti se nachází?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
